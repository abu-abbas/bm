<script setup>
  import { _ } from '@/js/utils/common.js'
  import { ref, onMounted, onUnmounted } from 'vue'
  import Flickity from 'flickity'
  import { useInterface } from '@/js/modules/tandingan/interface.js'

  // import 'lazysizes';
  // import a plugin
  // import 'lazysizes/plugins/parent-fit/ls.parent-fit';

  const kellesInterface = useInterface()

  const flickity = ref({
    ref: null,
    el: null
  })

  const initializeFlickity = () => {
    const flickAttr = JSON.parse(flickity.value.ref?.dataset?.flickity || {})
    flickity.value.el = new Flickity(flickity.value.ref, flickAttr)
  }

  const onHandleWindowResize = _.debounce(function (e) {
    console.log({ onHandleWindowResize: e })
    kellesInterface.init()
  }, 250)

  onMounted(() => {
    window.addEventListener('resize', onHandleWindowResize)
    initializeFlickity()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onHandleWindowResize)
  })
</script>

<template>
  <div class="kalles-medical__main-slide kalles-section nt_section type_slideshow type_carousel">
    <div class="kalles-medical__main-slide-inside nt_full se_height_cus_h nt_first">
      <div
        class="fade_flick_1 slideshow row no-gutters equal_nt nt_slider js_carousel prev_next_0 btn_owl_1 dot_owl_2 dot_color_1 btn_vi_2"
        data-flickity='{ "fade":0,"cellAlign": "center","imagesLoaded": 0,"lazyLoad": 0,"freeScroll": 0,"wrapAround": true,"autoPlay" : 0,"pauseAutoPlayOnHover" : true, "rightToLeft": false, "prevNextButtons": false,"pageDots": true, "contain" : 1,"adaptiveHeight" : 1,"dragThreshold" : 5,"percentPosition": 1 }'>
        <div class="kalles-medical__slide-01 col-12 slideshow__slide">
          <div class="oh pr nt_img_txt">
            <div class="js_full_ht4 img_slider_block dek_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                data-bgset="assets/images/bg-bm.jpg"></div>
            </div>
            <div class="js_full_ht4 img_slider_block mb_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                data-bgset="assets/images/bg-bm.jpg"></div>
            </div>
            <div class="caption-wrap caption-w-1 pe_none z_100 tl_md tl">
              <div class="pa_txts caption textw-100">
                <div class="left_center">
                  <div class="slt4_space kalles-medical__slide-01__space-01"></div>
                  <h3 class="slt4_h3 lh__1 mg__0 kalles-medical__slide-01__sub-title text-orange">BUSINESS <br>MATCHING 10
                  </h3>
                  <div class="slt4_space kalles-medical__slide-01__space-02"></div>
                  <h4 class="slt4_h4 mg__0 lh__1 f_body kalles-medical__slide-01__title text-purple">Peningkatan Penggunaan Produk Dalam Negeri (P3DN)</h4>
                  <p class="slt4_p mg__0 dn db_md kalles-medical__slide-01__desc text-purple">
                    Dalam rangkaian Gerakan Nasional Bangga Buatan Indonesia (BBI) dan Bangga Ber Wisata Indonesia (BBWI)
                  </p>
                  <div class="slt4_space kalles-medical__slide-01__space-03"></div>
                  <a
                    class="slt4_btn button pe_auto round_true btn_icon_false kalles-medical__slide-01__button"
                    href="shop-filter-options.html">Explore Now</a>
                </div>
              </div>
            </div>
            <a href="shop.html" class="pa t__0 l__0 b__0 r__0 pe_none"></a>
          </div>
        </div>
      </div>
    </div>
  </div></template>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.textw-100 {
  width: 100% !important;
  text-align: center !important;
}

.text-purple {
  color: #814363 !important;
}
.text-orange {
  color: #E85D40 !important;
}
</style>
