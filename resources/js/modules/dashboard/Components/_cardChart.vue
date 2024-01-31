<script setup>
  import { ref,provide } from 'vue';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';



  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);

  provide(THEME_KEY, 'light');



  const selectedDate = ref('')
const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

const chartOptions = ref({
  title: {
    text: "Event",
    left: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Hari Ini", "Akan Datang", "Selesai"]
  },
  series: [
    {
      name: "Event",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 5, name: "Hari Ini" },
        { value: 28, name: "Akan Datang" },
        { value: 85, name: "Selesai" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
});
</script>

<template>
  <el-card>
    <div class="block">
      <span class="demonstration">Tanggal</span>
      <el-date-picker
        v-model="selectedDate"
        type="datetimerange"
        :shortcuts="shortcuts"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
    </div>
    <div class="p-3 vh-50">
      <v-chart
        class="chart"
        :option="chartOptions"
        autoresize />
    </div>
  </el-card>
</template>

<style scoped>
.block {
  /* padding: 30px 0; */
  text-align: left;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.block:last-child {
  border-right: none;
}
.block .demonstration {
  display: block;
  /* color: var(--el-text-color-secondary); */
  font-size: 14px;
  margin-bottom: 20px;
}
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}

.vh-50 {
  height: 50vh;
}
</style>
