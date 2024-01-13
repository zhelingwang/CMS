import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const RouterConfig = {
    home: {
        name: 'home',
        path: '/home',
        title: '数据面板'
    },
    customer: {
        name: 'customer',
        path: '/customer',
        title: '客户'
    },
}

const { home, customer } = RouterConfig

// 具体路由
const routes: RouteRecordRaw[] = [
    {
        name: 'layout',
        path: '/',
        redirect: { name: home.name },
        component: () => import('@/layout/index.vue'), // vue-router开箱即用的动态导入, 按需导入
        children: [
            {
                ...home,
                meta: home,
                component: () => import('@/pages/home/index.vue')
            },
            {
                ...customer,
                meta: customer,
                component: () => import('@/pages/customer/index.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
