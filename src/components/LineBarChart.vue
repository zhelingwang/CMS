<template>
  <div :id="props.id" :style="style"></div>
</template>

<script setup>
import { useChart } from '@/hooks/chartHook'
import { useEventListener } from '@/hooks/addEventListener'

const props = defineProps({
  id: String,
  type: String,
  height: {
    type: Number,
    default: 300
  },
  xAxisData: Array,
  seriesData: Array,
})

const echarts = useChart()
let instance = null

const initBarChart = () => {
  const domEle = document.getElementById(props.id)
  if (domEle) {
    if (instance) {
      instance.clear()
    } else {
      instance = echarts.init(domEle)
      useEventListener(window, 'resize', instance.resize)
    }
    instance && instance.setOption({
      xAxis: {
        type: 'category',
        data: props.xAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: props.seriesData,
          type: props.type
        }
      ]
    })
  }
}

watch(() => [props.xAxisData, props.seriesData], () => {
  initBarChart()
})

const style = computed(() => ({
  height: `${props.height}px`
}))

onMounted(() => {
  initBarChart()
})
</script>

<style scoped></style>
