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
        path: '/user',
        title: '列表'
    }
}

const { home, list } = RouterConfig

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
                component: () => import('@/pages/users/index.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
