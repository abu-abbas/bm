<script setup>
const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
  }
})
</script>

<template>
  <div class="section-body">
    <h2 class="section-title fs-lg">Detail Tenant</h2>
    <p class="section-lead">
      Info detail tenant
    </p>

    <div class="row">
      {{ props.slug }}
    </div>
  </div>
</template>
