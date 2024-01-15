<template>
    <a-layout has-sider>
        <a-layout-sider v-model:collapsed="collapsed" collapsible
            :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
            <div class="logo" />
            <Menu></Menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: mlDistance }" :class="'transitionMargin'">
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
const mlDistance = computed(() => collapsed.value ? '80px' : '200px')
</script>
<style scoped>
.logo {
    height: 32px;
    margin: 16px;
    /* background: rgba(255, 255, 255, 0.3); */
}

.transitionMargin {
    transition: all .5s ease;
}
</style>
  