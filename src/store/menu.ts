import { defineStore } from 'pinia'
import { ref, h } from 'vue'
import {
    PieChartOutlined,
    DesktopOutlined,
} from '@ant-design/icons-vue'
import type { ItemType } from 'ant-design-vue';
import { RouterConfig } from '@/router'

const { home, list } = RouterConfig

export const useMenuStore = defineStore('menus', () => {
    const selectedKeys = ref<string[]>(['1'])
    const setSelectedKeys = (valArr) => {
        selectedKeys.value = valArr
    }
    const openKeys = ref<string[]>(['2'])
    const menusArr: Array<ItemType> = [
        {
            path: home.path,
            label: home.title,
            key: '1',
            icon: () => h(PieChartOutlined),
        },
        {
            label: 'other',
            key: '2',
            icon: () => h(DesktopOutlined),
            children: [
                {
                    path: list.path,
                    label: list.title,
                    key: '3'
                }
            ]
        }
    ]
    return {
        menusArr,
        selectedKeys,
        openKeys,
        setSelectedKeys,
    }
})