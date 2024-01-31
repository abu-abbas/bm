<script setup>
  import { ref } from 'vue';
  import {
    ArrowRight,
  } from '@element-plus/icons-vue'
  import dayjs from 'dayjs'
  import { Calendar } from '@element-plus/icons-vue'

  const nextEvent = ref(dayjs().add(1, 'month').startOf('month'))
</script>

<template>
  <el-card class="statistic-card">
    <el-countdown format="DD [Hari] HH:mm:ss" :value="nextEvent">
      <template #title>
        <div style="display: inline-flex; align-items: center">
          <el-icon style="margin-right: 4px" :size="12">
            <Calendar />
          </el-icon>
          Event Terdekat
        </div>
      </template>
    </el-countdown>
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
</template>

<style scoped>
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
</style>
