<script setup>
const props = defineProps({
  tenantSlug: {
    type: [String, null],
    required: true,
    default: null
  },
  productSlug: {
    type: [String, null],
    required: true,
    default: null
  },
})
</script>

<template>
  <div class="tenant-page-for-desktop-wrapper">
    {{ props.tenantSlug }} - {{ props.productSlug }} on desktop pc device
  </div>
</template>
