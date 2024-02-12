<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { _http, _route } from '@/js/utils/common.js'

import Navbar from '@/js/modules/landing/parts/Components/Navbar.vue'
import MobileToolbar from '@/js/modules/landing/parts/Components/MobileToolbar.vue'
import MobileMenu from '@/js/modules/landing/parts/Components/MobileMenu.vue'
import Footer from '@/js/modules/landing/parts/Components/Footer.vue'
import breadcrumb from '@/js/modules/landing/products/parts/_breadcrumb.vue'
import productThumbnails from '@/js/modules/landing/products/parts/_productThumbnails.vue'
import productInfo from '@/js/modules/landing/products/parts/_productInfo.vue'

const redirectTo = (page) => window.location = page
const routeParams = useRoute();
const btnLogout = ref(null)
const items = ref({})
const dataLoads = ref(false)
const mainImage = ref([])
const breadcrumbName = ref({
  product: '',
  tenant: ''
})



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
        breadcrumbName.value.product = res.data.data.product_name
        breadcrumbName.value.tenant = res.data.data.tenant_name
        dataLoads.value = true
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
  <div id="nt_wrapper">
    <Navbar />
    <div id="nt_content">
      <div class="sp-single sp-single-1 des_pr_layout_1 mb__60">
        <breadcrumb :breadcrumbName="breadcrumbName" v-if="dataLoads"/>
        <div class="container container_cat cat_default">
          <div class="row product mt__40">
            <div class="col-md-12 col-12 thumb_left">
              <div class="row mb__50">
                <!-- product thumbnails -->
                <productThumbnails :images="mainImage" v-if="dataLoads"/>
                <!--end product thumbnails -->
                <productInfo :item="items" v-if="dataLoads"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <MobileToolbar />
    <MobileMenu />
  </div>

</template>
