<template>
  <div :id="props.id" :style="style"></div>
</template>

<script setup>
import { useChart } from '@/hooks/chartHook'
import { useEventListener } from '@/hooks/addEventListener'

const props = defineProps({
  id: String,
  height: {
    type: Number,
    default: 300
  },
  seriesData: Array,
})

const echarts = useChart()
let instance = null

const PieChart = () => {
  const domEle = document.getElementById(props.id)
  if (domEle) {
    if (instance) {
      instance.clear()
    } else {
      instance = echarts.init(domEle)
      useEventListener(window, 'resize', instance.resize)
    }
    instance && instance.setOption({
      // title: {
      //   text: 'Referer of a Website',
      //   subtext: 'Fake Data',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: props.seriesData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }
}

watch(() => [props.seriesData], () => {
  PieChart()
})

const style = computed(() => ({
  height: `${props.height}px`
}))

onMounted(() => {
  PieChart()
})
</script>

<style scoped></style>
