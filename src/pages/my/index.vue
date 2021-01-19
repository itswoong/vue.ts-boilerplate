<template>
    <div>
        <h1>Hi!! My Page</h1>
        <span>{{ cardTitle }}</span>
        <button @click="changeTitle">타이틀 변경하기</button>

        <sample-comp :title="title" />
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
export default class MyPage extends Vue {
    // data
    title = 'Sample Compoent Title'
    views = {
        uiStatus: true
    }

    // computed
    get cardTitle() {
        return CardModule.title
    }

    created() {
        setTimeout(() => {
            CardModule.cardSampleAction('tttt')
        }, 1000)
    }

    // methods
    changeTitle() {
        this.title = 'Change Sample Compoent Title'
    }
}
</script>

<style lang="scss"></style>
