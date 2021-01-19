<template>
    <div class="box">
        <div v-show="views.uiStatus">
            <span>{{ title }}</span>
            <span>{{ sampleMethods() }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class SampleComponent extends Vue {
    // props
    @Prop({ required: true, type: String }) readonly title!: string

    // data
    views = {
        uiStatus: true
    }

    created() {
        // Vue Lifecycle Created
    }

    mounted() {
        // Vue Lifecycle Mounted
    }

    @Watch('title')
    onTitleChange() {
        console.log('title change')
    }

    // methods
    sampleMethods(): string {
        return 'sample'
    }
}
</script>

<style lang="scss">
.box {
    border: 1px solid red;
    padding: 50px;
}
</style>
