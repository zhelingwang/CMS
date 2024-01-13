<template>
    <a-layout-header class="headerStyle">
        <a-flex justify="flex-end" gap="middle">
            <!-- 多语言 -->
            <a-dropdown placement="bottom" :trigger="['click', 'hover']">
                <a class="ant-dropdown-link" @click.prevent>
                    <DribbbleOutlined :style="{ fontSize: '20px' }" />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a href="javascript:;">1st menu item</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">2nd menu item</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">3rd menu item</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
            <!-- 用户信息 -->
            <a-dropdown placement="bottom" :trigger="['click', 'hover']">
                <a class="ant-dropdown-link" @click.prevent>
                    <UserOutlined :style="{ fontSize: '20px' }" />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a href="javascript:;">1st menu item</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">2nd menu item</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">3rd menu item</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </a-flex>
    </a-layout-header>
</template>

<script setup lang="ts">
import { DribbbleOutlined, UserOutlined } from '@ant-design/icons-vue'

</script>

<style scoped lang="less">
.headerStyle {
    background-color: white;
}
</style>