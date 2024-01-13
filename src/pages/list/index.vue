<template>
    <h1>list page</h1>
    <a-button type="primary" @click="handleClick">detail</a-button>
</template>

<script setup>
const router = useRouter()

const handleClick = () => {
    router.push('/list/detail')
}

</script>

<style lang="less" scoped></style>