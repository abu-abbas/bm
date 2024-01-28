<script setup>
  import Footer from './Components/Footer.vue'
  import EventList from './Components/EventList.vue'
  import Navbar from './Components/Navbar.vue'
  import MainSlider from './Components/MainSlider.vue'
  import Products from './Components/Products.vue'
  import Blog from './Components/Blog.vue'
</script>

<template>
  <Navbar />
  <!-- end header -->

  <div id="nt_content">

    <!-- main slide -->
    <MainSlider />
    <!-- end main slide -->

    <!-- category banner section -->
    <EventList />
    <!-- end category banner section -->

    <!-- bestselling products-->
    <Products />
    <!-- end bestselling products-->

    <!--blog post-->
    <Blog />
    <!--end blog post-->


  </div>
  <Footer />
  
</template>