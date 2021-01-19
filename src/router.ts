import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import My from '@pages/my/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/my',
        name: 'My',
        component: My
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
