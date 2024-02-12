<script setup>
import { onMounted } from 'vue'
import { useFlickity, flickity } from '@/js/modules/tandingan/interface.js'

const heroSlider = useFlickity()
onMounted(() => heroSlider.initialize())
</script>

<template>
  <div class="kalles-digital__slide-banner kalles-section nt_section type_slideshow type_carousel">
    <div class="nt_full se_height_adapt nt_first">
      <div
        :ref="el => flickity.ref = el"
        class="fade_flick_1 slideshow row no-gutters equal_nt nt_slider js_carousel prev_next_0 btn_owl_1 dot_owl_2 dot_color_1 btn_vi_2"
        data-flickity='{ "fade":0,"cellAlign": "center","imagesLoaded": 0,"lazyLoad": 0,"freeScroll": 0,"wrapAround": true,"autoPlay" : 0,"pauseAutoPlayOnHover" : true, "rightToLeft": false, "prevNextButtons": false,"pageDots": true, "contain" : 1,"adaptiveHeight" : 1,"dragThreshold" : 5,"percentPosition": 1 }'
      >
        <div class="kalles-digital__slide-banner__layout-01 col-12 slideshow__slide">
          <div class="oh pr nt_img_txt bg-transparent">
            <div class="js_full_ht4 img_slider_block dek_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                data-bgset="assets/images/home-digital/main-slide.jpg"
              ></div>
            </div>
            <div class="js_full_ht4 img_slider_block mb_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                data-bgset="assets/images/home-digital/mobile-slide.jpg"
              ></div>
            </div>
            <div class="caption-wrap caption-w-1 pe_none z_100 tl_md tc">
              <div class="pa_txts caption">
                <div class="left_right">
                  <h4 class="kalles-digital__slide-banner__title slt4_h4 mg__0 lh__1 f_body">SUMMER 2020</h4>
                  <div class="kalles-digital__slide-banner__br-01 slt4_space"></div>
                  <h3 class="kalles-digital__slide-banner__sup-title slt4_h3 lh__1 mg__0">
                    Meet Galaxy S20, S20+
                  </h3>
                  <div class="slt4_html">
                    <h3>This is the phone that will change photography</h3>
                  </div>
                  <div class="kalles-digital__slide-banner__br-02 slt4_space"></div>
                  <a
                    class="kalles-digital__slide-banner__btn slt4_btn button pe_auto round_true btn_icon_false"
                    href="shop-filter-options.html"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
            <a href="shop.html" class="pa t__0 l__0 b__0 r__0 pe_none"></a>
          </div>
        </div>
        <div class="kalles-digital__slide-banner__layout-01 col-12 slideshow__slide">
          <div class="oh pr nt_img_txt bg-transparent">
            <div class="js_full_ht4 img_slider_block dek_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                data-bgset="assets/images/home-digital/main-slide.jpg"
              ></div>
            </div>
            <div class="js_full_ht4 img_slider_block mb_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                data-bgset="assets/images/home-digital/mobile-slide.jpg"
              ></div>
            </div>
            <div class="caption-wrap caption-w-1 pe_none z_100 tl_md tc">
              <div class="pa_txts caption">
                <div class="left_right">
                  <h4 class="kalles-digital__slide-banner__title slt4_h4 mg__0 lh__1 f_body">SUMMER 2020</h4>
                  <div class="kalles-digital__slide-banner__br-01 slt4_space"></div>
                  <h3 class="kalles-digital__slide-banner__sup-title slt4_h3 lh__1 mg__0">
                    Meet Galaxy S20, S20+
                  </h3>
                  <div class="slt4_html">
                    <h3>This is the phone that will change photography</h3>
                  </div>
                  <div class="kalles-digital__slide-banner__br-02 slt4_space"></div>
                  <a
                    class="kalles-digital__slide-banner__btn slt4_btn button pe_auto round_true btn_icon_false"
                    href="shop-filter-options.html"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
            <a href="shop.html" class="pa t__0 l__0 b__0 r__0 pe_none"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
