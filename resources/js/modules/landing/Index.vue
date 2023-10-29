<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <section class="landing-wrapper">
    <router-view :key="route.fullPath"></router-view>
  </section>
</template>
