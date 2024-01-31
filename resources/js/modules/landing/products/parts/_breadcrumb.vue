<script setup>
  import { useRoute } from 'vue-router'
  const routeParams = useRoute();
  const props = defineProps({
  breadcrumbName: {
    type: [Object, null],
    required: true,
    default: null
  },
})
</script>
<template>
  <div class="bgbl pt__20 pb__20 lh__1">
    <div class="container">
      <div class="row al_center">
        <div class="col">
          <nav class="sp-breadcrumb">
            <a href="/">Beranda</a>
            <i class="facl facl-angle-right"></i>
            <a :href="'/'+routeParams.params.tenantSlug">{{ props.breadcrumbName.tenant }}</a>
            <i class="facl facl-angle-right"></i>
            {{ props.breadcrumbName.product }}
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
