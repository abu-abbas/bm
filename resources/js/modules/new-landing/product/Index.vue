<script setup>
import { ref, onMounted } from 'vue'
import { _settings, _redirectToLogin } from '@/js/utils/common.js'
import { useFlickity } from '@modules/new-landing/home/parts/useFlickity.js'

import MainLayout from '@/js/components/layout/Index.vue'
import Image11 from '@theme/kalles/assets/images/single-product/simple-product/full-size-01.jpg'
import Checkout from '@modules/landing/checkout/Index.vue'

const product = useFlickity()
const flickity = ref({
  product: {
    ref: null,
    el: null
  },
})
const settings = {
  product: {
    initialIndex: '.media_id_001',
    fade: true,
    draggable: '>1',
    cellAlign: 'center',
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    adaptiveHeight: true,
    imagesLoaded: false,
    lazyLoad: 0,
    dragThreshold: 6,
    pageDots: false,
    rightToLeft: false
  },
}

onMounted(() => {
  product.initializeCustomRef(
    flickity.value.product.ref,
    flickity.value.product.el,
    settings.product
  )
})
</script>

<template>
  <MainLayout>
    <div class="sp-single sp-single-1 des_pr_layout_1 mb__60">
      <div class="bgbl pt__20 pb__20 lh__1">
        <div class="container">
          <div class="row al_center">
            <div class="col">
              <nav class="sp-breadcrumb">
                <a href="/">Home</a>
                <i class="facl facl-angle-right"></i>
                <a href="#">PT Gamma Persada Solusindo</a>
                <i class="facl facl-angle-right"></i>
                Asus PC
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="container container_cat cat_default">
        <div class="row product mt__40">
          <div class="col-md-12 col-12 thumb_left">
            <div class="row mb__50 pr_sticky_content">
              <div class="col-md-6 col-12 pr product-images img_action_zoom pr_sticky_img kalles_product_thumnb_slide">
                <div class="row">
                  <div class="col-12 col-lg col_thumb">
                    <div
                      :ref="el => flickity.product.ref = el"
                      class="p-thumb p-thumb_ppr images sp-pr-gallery equal_nt nt_contain ratio_imgtrue position_8 nt_slider pr_carousel"
                    >
                      <div
                        v-for="i in 5"
                        :key="i"
                        :class="`img_ptw p_ptw p-item sp-pr-gallery__img w__100 nt_bg_lz lazyload padding-top__127_66 media_id_${i.toString().padStart(3, '0')}`"
                        :data-mdid="i.toString().padStart(3, '0')"
                        data-height="1440"
                        data-width="1128"
                        data-ratio="0.7833333333333333"
                        data-mdtype="image"
                        :data-src="Image11"
                        :data-bgset="Image11"
                        data-cap="Blush Beanie - color pink , size S"
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-12 product-infors pr_sticky_su">
                <div class="kalles-section-pr_summary kalles-section summary entry-summary mt__30">
                  <h1 class="product_title entry-title fs__16">Cream women pants</h1>
                  <div class="flex wrap fl_between al_center price-review">
                    <p id="price_ppr" class="price_range">$35.00</p>
                  </div>
                  <div class="pr_short_des">
                    <p class="mg__0">Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.</p>
                  </div>
                  <div class="btn-atc atc-slide btn_des_1 btn_txt_3">
                    <div id="callBackVariant_ppr">
                      <div class="nt_cart_form variations_form variations_form_ppr">
                        <div class="variations_button in_flex column w__100 buy_qv_false">
                          <div class="flex wrap">
                            <button
                              v-if="!_settings.user"
                              type="button"
                              data-time="6000"
                              data-ani="shake"
                              class="single_add_to_cart_button button truncate w__100 mt__20 order-4 d-inline-block"
                              @click="_redirectToLogin"
                            >
                              <span class="txt_add ">
                                <FontAwesomeIcon :icon="['fas', 'plus']" />
                                Ketertarikan
                              </span>
                            </button>
                            <Checkout
                              v-else
                              class="single_add_to_cart_button button truncate w__100 mt__20 order-4 d-inline-block"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style lang="scss">
@import '@theme/kalles/assets/css/home-default.css';

.mb-xxl {
  margin-bottom: 10rem;
}
</style>

