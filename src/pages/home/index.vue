<template>
    <a-row :gutter="16">
        <a-col class="gutter-row" :span="12">
            <a-card title="激活量对比">
                <template #extra>
                    <a-date-picker v-model:value="selectMonth" picker="month" :format="monthFormat" />
                </template>
                <LineBarChart id="barchart" :xAxisData="xAxis" :seriesData="data" type="bar" />
            </a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
            <a-card title="趋势">
                <template #extra>
                    <a-range-picker v-model:value="selectRange" :format="dateFormat" />
                </template>
                <LineBarChart id="linechart" :xAxisData="xAxis" :seriesData="data" type="line" />
            </a-card>
        </a-col>
    </a-row>
    <a-divider :style="{ margin: '8px 0', border: 'none' }"></a-divider>
    <a-row :gutter="16">
        <a-col class="gutter-row" :span="12">
            <a-card title="活动">
                <template #extra>
                    <a-range-picker v-model:value="selectRange2" :format="dateFormat" />
                </template>
                <LineBarChart id="linechart2" :xAxisData="xAxis" :seriesData="data" type="line" />
            </a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
            <a-card title="占比">
                <PieChart id="pieChart" :seriesData="pieData" />
            </a-card>
        </a-col>
    </a-row>
</template>

<script setup>
import LineBarChart from '@/components/LineBarChart.vue'
import PieChart from '@/components/PieChart.vue'

const monthFormat = 'YYYY/MM'
const now = dayjs()
const selectMonth = ref(dayjs())
const xAxis = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const data = ref([120, 200, 150, 80, 70, 110, 130])
const pieData = ref([
    { value: 1048, name: 'customers' },
    { value: 735, name: 'robots' },
    { value: 580, name: 'assets' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
])

const dateFormat = 'YYYY/MM/DD'
const selectRange = ref([now.add(-7, 'day'), now])
const selectRange2 = ref([now.add(-7, 'day'), now])

watchEffect(() => { })

onMounted(() => { })

</script>

<style lang="less" scoped></style>