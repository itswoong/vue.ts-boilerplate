<template>
    <layout />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Layout from './components/Layout.vue'

@Component({
    components: {
        layout: Layout
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('styles/index.scss');
</style>
