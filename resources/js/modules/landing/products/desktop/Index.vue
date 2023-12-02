<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import { _settings } from '@/js/utils/common'
// const redirectTo = (page) => window.location = page

const btnLogout = ref(null)
const mainImage = ref('https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1')
const productImages = ref([
      'https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1',
      'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg',
      'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg',
    ]);


const changeMainImage = (newImage) => {
  mainImage.value = newImage;
};

onMounted(() => {
  if (btnLogout.value) {
    btnLogout.value.addEventListener('click', function() {
      window.doLogout.apply(this, arguments)
    })
  }
})

onBeforeUnmount(() => {
  if (btnLogout.value)
    btnLogout.value.removeEventListener('click')
})
</script>

<template>
  <div class="container home-wrapper mt-5">
    <div class="row">
      <div class="col-12">
        <b-breadcrumb>
          <b-breadcrumb-item href="#home">
            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> Ini Nama Tenant
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Ini Nama Product</b-breadcrumb-item>
        </b-breadcrumb>
      </div>
      <!-- <div class="col-12 d-block d-sm-none">
        <h5 class="b-text text-warning nama-tenant">Ini Nama Tenant</h5>
      </div>
      <div class="col-12 d-block d-sm-none">
        <h3 class="b-text text-dark nama-product">Ini Nama Product</h3>
      </div> -->
      <div class="col-12 d-block d-sm-none mb-3">
        <b-carousel id="carousel" :controls="true" :indicators="true" img-height="25rem" :interval="0">
          <b-carousel-slide v-for="(image, index) in productImages" :key="index" :img-src="image">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-12 d-none d-sm-block d-md-none mb-3">
        <b-carousel id="carousel" :controls="true" :indicators="true" img-height="25rem" :interval="0">
          <b-carousel-slide v-for="(image, index) in productImages" :key="index" :img-src="image">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-12 d-none d-md-block d-lg-none mb-3">
        <b-carousel id="carousel" :controls="true" :indicators="true" img-height="25rem" :interval="0">
          <b-carousel-slide v-for="(image, index) in productImages" :key="index" :img-src="image">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="imagedekstop">
        <div class="row">
          <div class="col-lg-6 	d-none d-lg-block d-xl-block">
            <div class="col-12 mb-2">
              <b-img 
                :src="mainImage" 
                fluid-grow 
                alt="Responsive image"
                style="width: 100%; height: 100%; border-radius: 1rem; height: 27rem;"
              />
            </div>
            <div class="col-12">
              <b-row class="mb-3">
                <b-col @click="changeMainImage('https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg')">
                  <b-img
                    contain
                    thumbnail
                    fluid-grow
                    src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg"
                    alt="Image 1"
                    style="width: 100%; height: 100%;"
                  ></b-img>
                </b-col>
                <b-col @click="changeMainImage('https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg')">
                  <b-img
                    contain
                    thumbnail
                    fluid-grow
                    src="https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg"
                    alt="Image 2"
                    style="width: 100%; height: 100%;"
                  ></b-img>
                </b-col>
                <b-col @click="changeMainImage('https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1')">
                  <b-img
                    contain
                    thumbnail
                    fluid-grow
                    src="https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1"
                    alt="Image 3"
                    style="width: 100%; height: 100%;"
                  ></b-img>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="col-sm-12 col-xs-12 col-lg-6 d-flex align-items-center mb-5">
            <div class="row">
              <div class="col-12">
                <h5 class="b-text text-warning nama-tenant">Ini Nama Tenant</h5>
              </div>
              <div class="col-12">
                <h3 class="b-text text-dark nama-product">Ini Nama Product</h3>
              </div>
              <div class="col-12 my-3">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat facere voluptatem maxime? Non eaque atque omnis repellendus quas! Veritatis sint fuga cupiditate consequuntur maiores sed dolorum dolorem quibusdam eum sit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente dolores iure cum aperiam explicabo beatae consectetur? Nulla incidunt iste autem ipsum necessitatibus, repellat nesciunt corrupti beatae quam quidem sunt?</span>
              </div>
              <div class="col-12 mt-2">
                <h4 class="b-text text-dark harga-product">Rp. 200.000,-</h4>
              </div>
              <div class="col-12 mb-3 d-none d-lg-block d-xl-block">
                <h5 class="b-text text-muted harga-product"> <b-badge variant="danger">50%</b-badge> <del>Rp. 400.000,- </del></h5>
              </div>
              <!-- <div class="col-lg-4 col-sm-12 col-xs-12 col-md-12 mb-3">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button variant="secondary" @click="minJumlah">-</b-button>
                  </b-input-group-prepend>
    
                  <b-input :value="jumlahProduk" type="number" min="0" class="text-center"></b-input>
    
                  <b-input-group-append>
                    <b-button variant="success" @click="addJumlah">+</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div> -->
              <div class="col-lg-8 col-sm-12 col-xs-12 col-md-12 w-100">
                <b-button class= 'w-100' size="lg" variant="primary"><b-icon icon="cart-fill" class="mr-2"></b-icon> Tambah Ke Keranjang</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-12 mt-3">
      <button
        v-if="!_settings.user"
        class="btn btn-primary"
        @click="redirectTo('/login')"
      >
        Login
      </button>
      <div v-else class="d-flex">
        <button
          class="btn btn-primary"
          @click="redirectTo('/admin')"
        >
          Halaman Admin
        </button>
        <button
          ref="btnLogout"
          class="btn btn-danger ml-3"
        >
          Logout
        </button>
      </div>
    </div> -->
  </div>
</template>
