<script setup>
  import Navbar from '@/js/modules/landing/parts/Components/navbar.vue'
  import MainSlider from '@/js/modules/landing/parts/Components/mainslider.vue'
  import Category from '@/js/modules/landing/parts/Components/category.vue'
  import MobileToolbar from '@/js/modules/landing/parts/Components/mobiletoolbar.vue'
  import MobileMenu from '@/js/modules/landing/parts/Components/mobilemenu.vue'
  import Footer from '@/js/modules/landing/parts/Components/footer.vue'


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
