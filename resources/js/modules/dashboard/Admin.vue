<template>
  <div class="section-header">
    <h1>Dashboard</h1>
  </div>

  <div class="section-body">
    <el-row :gutter="16" class="mb-3">
      <el-col :span="8">
        <cardEvent />
      </el-col>
      <el-col :span="8">
        <cardTenant />
      </el-col>
      <el-col :span="8">
        <cardEventCountdown />
      </el-col>
    </el-row>
    <cardChart />
  </div>
</template>

<script setup>



import cardEvent from './Components/_cardEvent.vue'
import cardEventCountdown from './Components/_cardEventCountdown.vue'
import cardTenant from './Components/_cardTenant.vue'
import cardChart from './Components/_cardChart.vue'



</script>

