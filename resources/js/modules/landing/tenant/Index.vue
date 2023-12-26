<script setup>
import isMobile from 'ismobilejs'
import { useRouter } from 'vue-router'
import { toRef, computed, onMounted } from 'vue'

// components
import TenantMobile from '@/js/modules/landing/tenant/mobile/Index.vue'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
    default: null
  }
})

const router = useRouter()
const localSlug = toRef(props, 'slug')
const isDesktop = computed(() => !isMobile(window.navigator).phone || isMobile(window.navigator).tablet)
onMounted(() => isDesktop.value ? router.push({ name: 'landing.home' }) : null)
</script>

<template>
  <TenantMobile :slug="localSlug" />
</template>

<style lang="scss">
body {
  background-color: #ffffff;
}

</style>
