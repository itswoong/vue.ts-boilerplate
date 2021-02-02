import store from '@/stores/index'
import { Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators'
import CardService, { CardResponse } from '@/services/card'

export interface CardState {
    title: string
}

@Module({ dynamic: true, name: 'card', namespaced: true, store })
class Card extends VuexModule {
    cardList: CardResponse[] = []

    @MutationAction({ mutate: ['cardList'] })
    async getCardAll() {
        const cardList = await new CardService().getCardAll()
        return {
            cardList
        }
    }
}

export const CardModule = getModule(Card)
