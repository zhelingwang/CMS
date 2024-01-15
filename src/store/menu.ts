import { defineStore } from 'pinia'
import { ref, h } from 'vue'
import {
    PieChartOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons-vue'
import type { ItemType } from 'ant-design-vue';
import { RouterConfig } from '@/router'

const { home, customer } = RouterConfig
type extraItemType = ItemType | {
    path: string
}

export const useMenuStore = defineStore('menus', () => {
    const selectedKeys = ref<string[]>(['1'])
    const setSelectedKeys = (valArr) => {
        selectedKeys.value = valArr
    }
    const openKeys = ref<string[]>(['2'])
    const menusArr: Array<extraItemType> = [
        {
            path: home.path,
            label: home.title,
            key: '1',
            icon: () => h(PieChartOutlined),
        },
        {
            path: customer.path,
            label: customer.title,
            key: '2',
            icon: () => h(UsergroupAddOutlined)
        }
    ]
    return {
        menusArr,
        selectedKeys,
        openKeys,
        setSelectedKeys,
    }
})