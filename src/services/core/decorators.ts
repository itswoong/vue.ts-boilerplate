import 'reflect-metadata'

import { HttpMethod, HttpService } from './http'

const parameterMetadataKey = Symbol('parameterSymbol')
const responseAdapterMetadataKey = Symbol('responseSymbol')

type ParametersTypes = 'Path' | 'Query' | 'Data'
export type ResponseAdapterType = (data: any) => {}

interface ParametersMetaData {
    type: ParametersTypes
    name: string
    index: number
}

const filteredMetaData = (type: string) => (parameters: ParametersMetaData) => parameters.type === type

function parameterFactory(paramName: ParametersTypes) {
    return (name: string) => (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
        const parametersMetaData: ParametersMetaData[] = Reflect.getOwnMetadata(parameterMetadataKey, target, propertyKey) || []
        parametersMetaData.push({
            type: paramName,
            name,
            index: parameterIndex
        })

        Reflect.defineMetadata(parameterMetadataKey, parametersMetaData, target, propertyKey)
    }
}

function responseAdapterFactory() {
    return (adapter: ResponseAdapterType) => (target: any, propertyName: string, descriptor: any) => {
        const responseAdapterMetaData = Reflect.getOwnMetadata(responseAdapterMetadataKey, target, propertyName)

        if (responseAdapterMetaData) {
            throw new Error('ResponseAdapter는 하나만 등록할 수 있습니다.')
        }

        Reflect.defineMetadata(responseAdapterMetadataKey, adapter, target, propertyName)

        return descriptor
    }
}

function methodFactory(method: HttpMethod) {
    return (url: string) => <T>(target: T, propertyName: string, descriptor: any) => {
        descriptor.value = function(...args: any[]) {
            const parametersMetaData: ParametersMetaData[] = Reflect.getOwnMetadata(parameterMetadataKey, target, propertyName) || []
            // console.log('parametersMetaData', parametersMetaData)
            const responseAdapterMetaData = Reflect.getOwnMetadata(responseAdapterMetadataKey, target, propertyName)
            console.log('responseMetaData', responseAdapterMetaData)

            const regexPath = /:(.+)/
            const urlPaths: string[] = url
                .split('/')
                .filter(u => regexPath.test(u))
                .map<string>(u => u.replace(regexPath, (match, ...args) => args[0]))
                .sort()

            const pathParameters: ParametersMetaData[] = parametersMetaData.filter(filteredMetaData('Path'))
            const paths: string[] = pathParameters.map<string>(m => m.name).sort()

            if (JSON.stringify(urlPaths) !== JSON.stringify(paths)) {
                throw new Error('Path 파라메터가 맞지 않습니다.')
            }

            let subUrl: string = url

            for (const { name, index } of pathParameters) {
                subUrl = subUrl.replace(`:${name}`, args[index])
            }

            const queryParameters: ParametersMetaData[] = parametersMetaData.filter(filteredMetaData('Query'))
            const params = queryParameters.reduce((previous, current) => ({ ...previous, [current.name]: args[current.index] }), {})

            const dataParameters: ParametersMetaData[] = parametersMetaData.filter(filteredMetaData('Data'))
            if (dataParameters.length > 1) {
                throw new Error('Data 파라메터는 하나만 넣을 수 있습니다.')
            }
            const data = args[dataParameters[0]?.index] || {}

            return (this as HttpService).request({ method, url: subUrl, params, data }, responseAdapterMetaData)
        }

        return descriptor
    }
}

export const GET = methodFactory('GET')
export const POST = methodFactory('POST')
export const PUT = methodFactory('PUT')
export const DELETE = methodFactory('DELETE')

export const Path = parameterFactory('Path')
export const Query = parameterFactory('Query')
export const Data = parameterFactory('Data')('Data')
export const ResponseAdapter = responseAdapterFactory()
