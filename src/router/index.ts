import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const RouterConfig = {
    home: {
        name: 'home',
        path: '/home',
        title: '首页'
    },
    list: {
        name: 'user',
        path: '/list',
        title: '列表'
    },
    listDetail: {
        name: 'listDetail',
        path: '/list/detail',
        title: '详情'
    }
}

const { home, list, listDetail } = RouterConfig

// 具体路由
const routes: RouteRecordRaw[] = [
    {
        name: 'layout',
        path: '/',
        component: () => import('@/layout/index.vue'), // vue-router开箱即用的动态导入, 按需导入
        children: [
            {
                ...home,
                meta: home,
                component: () => import('@/pages/home/index.vue')
            },
            {
                ...list,
                meta: list,
                component: () => import('@/pages/list/index.vue')
            },
            {
                ...listDetail,
                meta: listDetail,
                component: () => import('@/pages/detail/index.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
