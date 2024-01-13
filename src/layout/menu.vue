<template>
    <a-menu v-model:openKeys="menuStore.openKeys" v-model:selectedKeys="menuStore.selectedKeys" theme="dark" mode="inline"
        :items="menuStore.menusArr" @click="handleClick"></a-menu>
</template>

<script setup lang="ts">
import type { MenuProps } from 'ant-design-vue';
import { useMenuStore } from '@/store/menu'

const menuStore = useMenuStore()
const router = useRouter()
const handleClick: MenuProps['onClick'] = e => {
    const { path } = e.item.originItemValue
    menuStore.setSelectedKeys([e.key])
    console.log('[menu]openKeys: ', menuStore.openKeys, ', selectedKeys =', menuStore.selectedKeys);
    router.push(path)
};
onMounted(() => {
    console.log('[menu]openKeys: ', menuStore.openKeys, ', selectedKeys =', menuStore.selectedKeys);
})
</script>

<style scoped lang="less"></style>