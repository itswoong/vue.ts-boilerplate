import axios, { AxiosInstance, AxiosRequestConfig, AxiosTransformer, AxiosAdapter } from 'axios'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'

import { ResponseAdapterType } from './decorators'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
export type LocaServiceResponse<T> = Promise<T | null>

export class HttpService {
    private readonly instance: AxiosInstance

    constructor() {
        // console.log('process.env.API_DOMAIN', process.env.API_DOMAIN)
        this.instance = axios.create({
            baseURL: process.env.API_DOMAIN || 'http://localhost:3000',
            headers: {
                'Cache-Control': 'no-cache'
            },
            adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter)),
            transformResponse: this.getTransformResponse()
        })
    }

    private getTransformResponse(): AxiosTransformer {
        return (data: any) => {
            try {
                const _data = JSON.parse(data)
                return {
                    ..._data
                }
            } catch (error) {
                return {}
            }
        }
    }

    public async request<T>(config: AxiosRequestConfig, responseAdapter?: ResponseAdapterType): Promise<T> {
        const { transformResponse: defaultTransformResponse } = this.instance.defaults
        const transformResponse: AxiosTransformer[] = [defaultTransformResponse as AxiosTransformer]

        if (responseAdapter) {
            transformResponse.push(responseAdapter)
        }

        const response = await this.instance.request<T>({
            ...config,
            transformResponse
        })
        return response.data
    }
}
