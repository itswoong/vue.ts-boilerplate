<template>
    <main>
        <gnb title="My" />
        <transition name="">
            <drawer-menu />
        </transition>
        <router-view />
    </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import GNB from '@components/GNB.vue'
import DrawerMenu from '@components/DrawerMenu.vue'

@Component({
    components: {
        gnb: GNB,
        'drawer-menu': DrawerMenu
    }
})
export default class Layout extends Vue {}
</script>

<style lang="scss"></style>
