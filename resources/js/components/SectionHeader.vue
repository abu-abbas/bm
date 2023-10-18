<script setup>
import Breadcrumbs from '@/js/components/Breadcrumbs.vue'
const props = defineProps({
  title: {
    type: [String, null],
    required: false,
    default: null
  }
})
</script>

<template>
  <div class="section-header">
    <h1>{{ props.title }}</h1>
    <Breadcrumbs />
  </div>
</template>
