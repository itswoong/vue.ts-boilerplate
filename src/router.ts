import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Card from '@pages/card/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/card',
        name: 'Card',
        component: Card
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
