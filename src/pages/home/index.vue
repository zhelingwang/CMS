<template>
    <a-row :gutter="16">
        <a-col class="gutter-row" :span="12">
            <a-card title="激活量对比">
                <template #extra>
                    <a-date-picker v-model:value="selectMonth" picker="month" :format="monthFormat" />
                </template>
                <BarChart id="barchart" :xAxisData="xAxis" :seriesData="data" />
            </a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
            <a-card>1</a-card>
        </a-col>
    </a-row>
    <a-divider :style="{ margin: '8px 0', border: 'none' }"></a-divider>
    <a-row :gutter="16">
        <a-col class="gutter-row" :span="12">
            <a-card>1</a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
            <a-card>1</a-card>
        </a-col>
    </a-row>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'

const monthFormat = 'YYYY/MM'
const selectMonth = ref(dayjs(), monthFormat)
const xAxis = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const data = ref([120, 200, 150, 80, 70, 110, 130])

watchEffect(() => {
    console.log(selectMonth.value.format(monthFormat));
})

onMounted(() => {

})

</script>

<style lang="less" scoped></style>