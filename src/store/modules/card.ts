import store from '@stores/index'
import {
    Module,
    VuexModule,
    Mutation,
    Action,
    getModule
} from 'vuex-module-decorators'

export interface CardState {
    title: string
}

@Module({ dynamic: true, name: 'card', namespaced: true, store })
class Card extends VuexModule {
    title = ''

    @Mutation
    private cardSampleMutation(title: string) {
        this.title = title
    }

    @Action({ commit: 'cardSampleMutation' })
    cardSampleAction(title: string) {
        return title
    }
}

export const CardModule = getModule(Card)
