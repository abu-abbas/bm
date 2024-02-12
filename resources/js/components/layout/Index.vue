<script setup>
import { onMounted } from 'vue'
import { useKallesInterface, $mask } from '@components/layout/interface.js'
import '@theme/kalles/assets/js/lazysizes.min.js'

import Footer from '@components/layout/parts/Footer.vue'
import HeaderNav from '@components/layout/parts/Header.vue'
import BackToTop from '@components/layout/parts/BackToTop.vue'

const themeSetting = useKallesInterface()
onMounted(() => themeSetting.addClassesToBody())
</script>

<template>
  <div class="tandingan-wrapper">
    <div id="nt_wrapper">
      <HeaderNav />
      <div id="nt_content">
        <slot></slot>
      </div>
      <Footer />
    </div>
    <div
      ref="$mask"
      class="mask-overlay ntpf t__0 r__0 l__0 b__0 op__0 pe_none"
    >
    </div>
    <BackToTop />
  </div>
</template>

<style lang="scss">
@import '@theme/kalles/assets/css/home-digital.css';
</style>
