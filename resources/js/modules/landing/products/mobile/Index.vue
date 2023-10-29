<script setup>
import { toRef } from 'vue'

import Checkout from '@/js/modules/landing/checkout/Index.vue'
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

</script>

<template>
  <div class="tenant-page-for-desktop-wrapper">
    <div class="d-flex flex-column my-5 mx-3">
      {{ props.tenantSlug }} - {{ props.productSlug }} on mobile device

      <Checkout
        :tenant-slug="localTenantSlug"
        :product-slug="localProductSlug"
        class="mt-5"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/js/modules/landing/mobile-view.scss';
</style>
