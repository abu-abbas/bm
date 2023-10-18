<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const localBreadcrumbs = computed(() => route.meta?.breadcrumbs || [])
const onHandleRoute = item => router.push({ name: item.url })
</script>

<template>
  <div
    v-if="localBreadcrumbs.length"
    :key="$route.fullPath"
    class="section-header-breadcrumb"
  >

    <div
      v-for="(breadcrumb, idx) in localBreadcrumbs"
      :key="idx"
      :class="{
        'breadcrumb-item': true,
        'active': breadcrumb.isActive
      }"
    >
      <a
        v-if="breadcrumb.isActive"
        href="javascript:void(0)"
        @click="onHandleRoute(breadcrumb)"
      >
        {{ breadcrumb.label }}
      </a>
      <span v-else>{{ breadcrumb.label }}</span>
    </div>
  </div>
</template>
