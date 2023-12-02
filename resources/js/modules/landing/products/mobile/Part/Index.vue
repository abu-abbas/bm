<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import { _settings } from '@/js/utils/common'
// const redirectTo = (page) => window.location = page
// const mainImage = ref('https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1')
const btnLogout = ref(null)
const productImages = ref([
      'https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1',
      'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg',
      'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg',
    ]);

const onHandleLogout = function () {
  window.doLogout.apply(this, arguments)
}

onMounted(() => {
  if (btnLogout.value)
    btnLogout.value.addEventListener('click', onHandleLogout)
})

onBeforeUnmount(() => {
  if (btnLogout.value)
    btnLogout.value.removeEventListener('click', onHandleLogout)
})
</script>

<template>
  <div>
    <b-nav tabs fill class="fixed-top bg-white">
      <b-nav-item class="text-left"><b-icon icon="arrow-left"></b-icon> Nama Tenant</b-nav-item>
    </b-nav>
    <div class="mainImage">
      <b-carousel id="carousel" :controls="true" :indicators="true" :interval="0">
        <b-carousel-slide v-for="(image, index) in productImages" :key="index" :img-src="image">
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="gradient-background bg-white">
      <div class="container">
        <!-- <div class="bg-white" style="border-top-left-radius: 1rem; border-top-right-radius: 1rem;"> -->
        <h3 class="text-dark mt-2">Ini Nama Product</h3>
        <span class="mt-2 text-dark"><b-icon icon="shop"></b-icon>Product By:  Nama Tenant</span>
        <h4 class="text-info mt-4"><b-icon icon="tags" varian="info"></b-icon> Rp. 89.000</h4>
        <div class="detail">
          <span class="text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita numquam optio dolores molestias voluptates porro velit quaerat, dolore, in iste amet neque illo accusamus, culpa explicabo necessitatibus? Nisi, facere.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis modi atque ratione enim architecto fugiat veniam delectus velit? Accusantium quibusdam ad unde sequi autem quam fuga provident enim aliquam ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus incidunt cupiditate velit perferendis aut iusto odio accusantium repudiandae itaque, beatae, consectetur harum obcaecati deleniti nisi voluptatum! Minus labore placeat natus.
          </span>
        </div>
        <div class="mt-4">
          <b-button variant="success" size="lg" class="w-100">
            <b-icon icon="cart" aria-hidden="true"></b-icon> Tambahkan Ke Keranjang
          </b-button>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <b-nav tabs justified class="fixed-bottom bg-white">
      <b-nav-item active>
        <b-icon icon="house" variant="primary"></b-icon>
      </b-nav-item>
      <b-nav-item>
        <b-icon icon="shop" variant="primary"></b-icon>
      </b-nav-item>
      <b-nav-item>
        <b-icon icon="cart" variant="primary"></b-icon>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<style scoped>
  .mainImage {
    width: 100vw;
    height: 30vw;
    position: relative;
  }
  .gradient-background {
    position: absolute;
    background: linear-gradient(135deg, #ffffff, #ffffff);
    top: 100vw; /* Mulai dari bawah gambar dalam carousel */
    left: 0;
    right: 0;
    height: 50vh; /* Tinggi sesuai kebutuhan Anda */
  }
</style>