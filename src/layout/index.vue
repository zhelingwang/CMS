<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <Menu></Menu>
        </a-layout-sider>
        <a-layout>
            <Header />
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <a-card>
                    <router-view />
                </a-card>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
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
  