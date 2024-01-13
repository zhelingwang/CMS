<template>
    <a-layout-header class="headerStyle">
        <a-row justify="end">
            <!-- 多语言 -->
            <a-col :span="1">
                <a-dropdown placement="bottom" :trigger="['click', 'hover']" arrow>
                    <DribbbleOutlined :style="{ fontSize: '20px' }" />
                    <template #overlay>
                        <a-menu @click="onClick">
                            <a-menu-item key="1">1st menu item</a-menu-item>
                            <a-menu-item key="2">2nd menu item543231321</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-col>
            <!-- 用户信息 -->
            <a-col :span="1">
                <a-dropdown placement="bottom" :trigger="['click', 'hover']" arrow>
                    <UserOutlined :style="{ fontSize: '20px' }" />
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="1">1st menu item</a-menu-item>
                            <a-menu-item key="2">2nd menu item</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script setup lang="ts">
import { DribbbleOutlined, UserOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue';

const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(`Click on item ${key}`);
}

</script>

<style scoped lang="less">
.headerStyle {
    background-color: white;

    .ant-col {
        text-align: center;
    }
}
</style>