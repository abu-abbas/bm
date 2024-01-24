<template>
  <div class="section-header">
    <h1>Dashboard</h1>
  </div>

  <div class="section-body">
    <el-row :gutter="16" class="mb-3">
      <el-col :span="8">
        <el-card class="statistic-card">
          <el-statistic :value="98500">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                Daily active users
                <el-tooltip
                  effect="dark"
                  content="Number of users who logged into the product in one day"
                  placement="top"
                >
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>than yesterday</span>
              <span class="green">
                24%
                <el-icon>
                  <CaretTop />
                </el-icon>
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="statistic-card">
          <el-statistic :value="outputValue">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                Monthly Active Users
                <el-tooltip
                  effect="dark"
                  content="Number of users who logged into the product in one month"
                  placement="top"
                >
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>month on month</span>
              <span class="red">
                12%
                <el-icon>
                  <CaretBottom />
                </el-icon>
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="statistic-card">
          <el-countdown format="DD [days] HH:mm:ss" :value="nextEvent">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                <el-icon style="margin-right: 4px" :size="12">
                  <Calendar />
                </el-icon>
                Event Terdekat
              </div>
            </template>
          </el-countdown>
          <!-- <div class="countdown-footer">{{ nextEvent.format('YYYY-MM-DD') }}</div> -->
          <div class="statistic-footer">
            <div class="footer-item">
              <div class="countdown-footer">
                {{ nextEvent.format('YYYY-MM-DD') }}
                <el-icon>
                  <Calendar />
                </el-icon>
              </div>
            </div>
            <div class="footer-item">
              <el-icon :size="14">
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
  </div>
</template>

<script setup>
import { ref,provide } from 'vue';
import { useTransition } from '@vueuse/core'
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import { Calendar } from '@element-plus/icons-vue'

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


const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 172000
const selectedDate = ref('')
const nextEvent = ref(dayjs().add(1, 'month').startOf('month'))
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
    text: "Traffic Sources",
    left: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" }
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

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
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