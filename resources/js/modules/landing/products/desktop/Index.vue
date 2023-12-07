<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { _http, _route } from '@/js/utils/common.js'

const redirectTo = (page) => window.location = page
const routeParams = useRoute();
const btnLogout = ref(null)
const items = ref({})
const mainImage = ref('')
const productImages = ref([
      'https://th.bing.com/th/id/OIP.3vxFi4e09BLrfl2LRKlWHgHaHa?pid=ImgDet&w=910&h=910&rs=1',
      'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg',
      'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg',
    ]);


const changeMainImage = (newImage) => {
  mainImage.value = newImage;
};

const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return formatter.format(amount);
}

const loadItem = async () => {
  try {
    _http.get(
      _route(
        'backend.landing.product.getsingelproduct',
        {
          tenant: routeParams.params.tenantSlug,
          product: routeParams.params.productSlug,
        }
      )
    )
      .then(res => {
        if (res.data.data == null) {
          return redirectTo('/404')
        }
        items.value = res.data.data
        mainImage.value = [...res?.data?.data?.images || []]
      })
      .catch(error => {
        console.log(error);
      })

  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {

  loadItem()
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
            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> {{ items.tenant_name }}
          </b-breadcrumb-item>
          <b-breadcrumb-item active>{{ items.product_name }}</b-breadcrumb-item>
        </b-breadcrumb>
      </div>
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
                <h5 class="b-text text-warning nama-tenant">{{ items.tenant_name }}</h5>
              </div>
              <div class="col-12">
                <h3 class="b-text text-dark nama-product">{{ items.product_name }}</h3>
              </div>
              <div class="col-12 my-3">
                <span style="white-space: pre-line;">{{ items.description}}</span>
              </div>
              <div class="col-12 mt-2">
                <h4 class="b-text text-dark harga-product">{{ formatCurrency(items.price) }}</h4>
              </div>
              <div class="col-12 mb-3 d-none d-lg-block d-xl-block">
                <h5 class="b-text text-muted harga-product"> <b-badge variant="danger">15%</b-badge> <del>{{ formatCurrency(items.price+(items.price*0.15)) }}</del></h5>
              </div>
              <div class="col-lg-8 col-sm-12 col-xs-12 col-md-12 w-100">
                <b-button class= 'w-100' size="lg" variant="primary"><b-icon icon="cart-fill" class="mr-2"></b-icon> Tambah Ke Keranjang</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
