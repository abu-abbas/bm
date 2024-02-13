<script setup>
import { toRef } from 'vue'

import { useTenant } from '@modules/landing/tenant/tenant.js'
import { formatCurrency } from '@/js/utils/formatter.js'

import Spinner from '@components/Spinner.vue'
import NotFound from '@modules/errors/404.vue'
import MainLayout from '@components/layout/Index.vue'
import MainSlide from '@theme/kalles/assets/images/home-digital/main-slide.jpg'
import Image11 from '@theme/kalles/assets/images/home-digital/pr-10.jpg'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
    default: null
  }
})

const localSlug = toRef(props, 'slug')
const { data, found, loading, onHandleSelectedProduct } = useTenant(localSlug.value)
</script>

<template>
  <MainLayout>
    <div class="tenant-wrapper">
      <div class="kalles-section page_section_heading">
        <div class="page-head tc pr oh cat_bg_img page_head_">
          <div class="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0" :data-bgset="MainSlide">
          </div>
          <div class="container pr z_100">
            <h1 class="mb__5 cw">{{ data?.name }}</h1>
            <p class="mg__0">{{ data?.description }}</p>
          </div>
        </div>
      </div>
      <NotFound  v-if="!loading && !found" />
      <div v-else class="kalles-section nt_section type_featured_collection tp_se_cdt">
        <div class="kalles-digital__bestselling-section container">
          <div class="wrap_title des_title_1">
            <h3 class="section-title tc pr flex fl_center al_center fs__24 title_1">
              <span class="mr__10 ml__10">Daftar Produk</span>
            </h3>
            <span class="dn tt_divider">
              <span></span>
              <i class="dn clprfalse title_1 la-gem"></i>
              <span></span>
            </span>
            <span class="section-subtitle db tc sub-title"></span>
          </div>

          <div v-if="loading" class="mt-5 mb-xxl text-center">
            <Spinner />
          </div>
          <template v-else>
            <div v-if="data?.products?.length" class="products nt_products_holder row fl_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30">
              <div
                v-for="product in data.products"
                :key="product.slug"
                class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
              >
                <div class="product-inner pr">
                  <div class="product-image pr oh lazyload">
                    <span class="tc nt_labels pa pe_none cw">
                      <span class="onsale nt_label">
                        <span>TKDN {{ product.tkdn_value }}%</span>
                      </span>
                    </span>
                    <a
                      class="db pointer"
                      @click="onHandleSelectedProduct(product.slug)"
                    >
                      <div
                        class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                        :data-bgset="product.images[0] || Image11"
                      ></div>
                    </a>
                    <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div
                        class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                        :data-bgset="product?.images[0] || Image11"
                      >
                      </div>
                    </div>
                  </div>
                  <div class="product-info mt__15">
                    <h3 class="product-title pr fs__14 mg__0 fwm">
                      <a
                        class="cd chp pointer"
                        @click="onHandleSelectedProduct(product.slug)"
                      >
                        {{ product.product_name }}
                      </a>
                    </h3>
                    <span class="price dib mb__5">
                      <!-- <del><span class="money">$312.00</span></del> -->
                      <span class="money text-danger">{{ formatCurrency(product.price) }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="products nt_products_holder row fl_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30">
              <div class="mt-5 mb-xxl text-muted">
                Belum ada produk
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

  </MainLayout>
</template>

<style lang="scss">
.mb-xxl {
  margin-bottom: 10rem;
}
</style>

