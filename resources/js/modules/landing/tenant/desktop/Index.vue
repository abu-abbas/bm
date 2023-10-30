<script setup>
const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
    default: null
  },
})
</script>

<template>
  <div class="tenant-page-for-desktop-wrapper">
    {{ props.slug }} on desktop pc device
  </div>
</template>
