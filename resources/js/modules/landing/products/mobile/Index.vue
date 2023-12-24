<script setup>
import { toRef, ref, onMounted, onBeforeUnmount } from 'vue'

// helper
import { _settings, _redirectToLogin, _http, _route } from '@/js/utils/common.js'

// component
import Checkout from '@/js/modules/landing/checkout/Index.vue'

const props = defineProps({
  tenantSlug: {
    type: [String, null],
    required: true,
    default: null
  },
  productSlug: {
    type: [String, null],
    required: true,
    default: null
  },
})
const items = ref({})
const localTenantSlug = toRef(props, 'tenantSlug')
const localProductSlug = toRef(props, 'productSlug')
const btnLogout = ref(null)
const productImages = ref([]);

const redirectTo = (page) => window.location = page
const onHandleLogout = function () {
  window.doLogout.apply(this, arguments)
}
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
          tenant: localTenantSlug.value,
          product: localProductSlug.value,
        }
      )
    )
      .then(res => {
        if (res.data.data == null) {
          return redirectTo('/404')
        }
        items.value = res.data.data
        productImages.value = [...res?.data?.data?.images || []]
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
      <b-nav-item class="text-left"><b-icon icon="arrow-left"></b-icon> {{ items.tenant_name }}</b-nav-item>
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
        <h3 class="text-dark mt-2">{{ items.nama_barang }}</h3>
        <span class="mt-2 text-dark"><b-icon icon="shop"></b-icon>  Product By:  {{ items.tenant_name }}</span>
        <h4 class="text-info mt-4"><b-icon icon="tags" varian="info"></b-icon> {{ formatCurrency(items.price) }}</h4>
        <div class="detail">
          <span class="text-dark" style="white-space: pre-line;">{{ items.description}}</span>
        </div>
        <button
          v-if="!_settings.user"
          class="btn btn-lg btn-primary mt-3 mb-5"
          @click="_redirectToLogin()"
        >
          <FontAwesomeIcon :icon="['fas', 'plus']" />
          Ketertarikan
        </button>

        <Checkout
          v-else
          v-model:product="items"
          :tenant-slug="localTenantSlug"
          :product-slug="localProductSlug"
          class="mt-3"
        />
        <!-- </div> -->
      </div>
    </div>
    <b-nav tabs justified class="fixed-bottom bg-white">
      <b-nav-item active @click="redirectTo('/')">
        <b-icon icon="house" variant="primary"></b-icon>
      </b-nav-item>
      <b-nav-item @click="redirectTo('/'+localTenantSlug )">
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
  .container {
    padding-bottom: 70px;
  }
</style>
<style lang="scss">
@import '@/js/modules/landing/mobile-view.scss';
</style>
