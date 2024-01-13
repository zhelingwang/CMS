<template>
    <h1>list detail page</h1>
    <a-button type="primary" @click="handleClick">back to list</a-button>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

const handleClick = () => {
    router.back()
}
console.log(route);
</script>

<style lang="less" scoped></style>