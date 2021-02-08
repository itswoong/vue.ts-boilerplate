import { HttpService, LocaServiceResponse, GET, Path, ResponseAdapter } from './core'

export interface CardResponse {
    id: number
    name: string
    description: string
}

export default class CardService extends HttpService {
    @GET('/card')
    async getCardAll(): LocaServiceResponse<CardResponse[]> {
        return null
    }

    @GET('/card/:id')
    @ResponseAdapter(data => {
        console.log('hahaha')
        return {
            ...data,
            tmp2: 'tmp2'
        }
    })
    async getCardbyId(@Path('id') id: number): LocaServiceResponse<CardResponse> {
        return null
    }
}
