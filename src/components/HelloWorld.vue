<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  msg: String,
})

onMounted(() => {

})
</script>

<template>
  <p>hello {{ $translate('greetings.hello') }}</p>
</template>

<style scoped></style>
