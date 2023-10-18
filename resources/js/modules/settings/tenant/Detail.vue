<script setup>
const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
  }
})
</script>

<template>
  <div class="section-header">
    <h1>Pengaturan Tenant</h1>
    <div class="section-header-breadcrumb">
      <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
      <div class="breadcrumb-item"><router-link :to="{ name: 'settings.tenant' }">Master Tenant</router-link></div>
      <div class="breadcrumb-item">Detail Tenant</div>
    </div>
  </div>

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
