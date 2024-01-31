<script setup>
  import Navbar from './Components/Navbar.vue'
  import MainSlider from './Components/MainSlider.vue'
  import Category from './Components/Category.vue'
  import Footer from './Components/Footer.vue'
  import MobileMenu from './Components/MobileMenu.vue'
  import MobileToolbar from './Components/MobileToolbar.vue'

  import '@theme/kalles/assets/js/flickity.pkgd.min.js'
  // import '@theme/kalles/assets/js/photoswipe.min.js'
  // import '@theme/kalles/assets/js/photoswipe-ui-default.min.js'

</script>

<template>
  <!-- end header -->
  <div id="nt_wrapper">
    <Navbar />
    <div id="nt_content">

      <!-- main slide -->
      <MainSlider />
      <!-- end main slide -->

      <!-- category banner section -->
      <Category />
      <!-- end category banner section -->


      <Footer />
    </div>
  </div>
  <MobileMenu />
  <MobileToolbar />

</template>
