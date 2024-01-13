<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <Menu></Menu>
        </a-layout-sider>
        <a-layout>
            <Header />
            <a-layout-content style="margin: 16px">
                <router-view />
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Alltoowell ©2024 Created by Zheling
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import Menu from '@/layout/menu.vue'
import Header from '@/layout/header.vue'
const collapsed = ref<boolean>(false)

</script>
<style scoped>
.logo {
    height: 32px;
    margin: 16px;
    /* background: rgba(255, 255, 255, 0.3); */
}
</style>
  