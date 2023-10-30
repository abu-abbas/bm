<script setup>
import isMobile from 'ismobilejs'
import { toRef, computed } from 'vue'

// components
import TenantMobile from '@/js/modules/landing/tenant/mobile/Index.vue'
import TenantDesktop from '@/js/modules/landing/tenant/desktop/Index.vue'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
    default: null
  }
})

const localSlug = toRef(props, 'slug')
const isDesktop = computed(() => !isMobile(window.navigator).phone || isMobile(window.navigator).tablet)
</script>

<template>
  <component
    :is="isDesktop ? TenantDesktop : TenantMobile"
    :slug="localSlug"
  />
</template>

<style lang="scss">
body {
  background-color: #ffffff;
}

</style>
