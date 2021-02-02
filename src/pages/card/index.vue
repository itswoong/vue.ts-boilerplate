<template>
    <div>
        <h1>Hi!! Card Page</h1>
        <button @click="changeTitle">타이틀 변경하기</button>
        <sample-comp :title="title" />

        <ul>
            <li v-for="(card, index) in cards" :key="index">{{ card.name }} - {{ card.description }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { CardModule } from '@stores/modules/card'
import SampleComp from '@components/SampleComponent.vue'

@Component({
    components: {
        'sample-comp': SampleComp
    }
})
export default class CardPage extends Vue {
    // data
    title = 'Sample Compoent Title'
    views = {
        uiStatus: true
    }

    // computed
    get cards() {
        return CardModule.cardList
    }

    async mounted() {
        await CardModule.getCardAll()
    }

    // methods
    changeTitle() {
        this.title = 'Change Sample Compoent Title'
    }
}
</script>

<style lang="scss"></style>
