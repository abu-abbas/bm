<script setup>
import isMobile from 'ismobilejs'
import { toRef, computed } from 'vue'

// components
import ProductMobile from '@/js/modules/landing/products/mobile/Index.vue'
import ProductDesktop from '@/js/modules/landing/products/desktop/Index.vue'

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

const localTenantSlug = toRef(props, 'tenantSlug')
const localProductSlug = toRef(props, 'productSlug')
const isDesktop = computed(() => !isMobile(window.navigator).phone || isMobile(window.navigator).tablet)
</script>

<template>
  <component
    :is="isDesktop ? ProductDesktop : ProductMobile"
    :tenant-slug="localTenantSlug"
    :product-slug="localProductSlug"
  />
</template>

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>
