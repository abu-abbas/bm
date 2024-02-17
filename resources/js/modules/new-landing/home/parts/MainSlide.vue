<script setup>
import { onMounted } from 'vue'
import { _settings } from '@/js/utils/common.js'
import { useFlickity, flickity } from '@modules/new-landing/home/parts/useFlickity.js'

import MainSlide from '@theme/kalles/assets/images/bg/pattern-1-reduce.jpg'
import MobileSlide from '@theme/kalles/assets/images/bg/pattern-1-reduce.jpg'

const heroSlider = useFlickity()
const events = _settings?.events || []
onMounted(() => heroSlider.initialize())
</script>

<template>
  <div class="kalles-digital__slide-banner kalles-section nt_section type_slideshow type_carousel">
    <div class="nt_full se_height_adapt nt_first">
      <div
        :ref="el => flickity.ref = el"
        class="fade_flick_1 slideshow row no-gutters equal_nt nt_slider js_carousel prev_next_0 btn_owl_1 dot_owl_2 dot_color_1 btn_vi_2"
      >
        <div
          v-for="(event, idx) in events"
          :key="idx"
          class="kalles-digital__slide-banner__layout-01 col-12 slideshow__slide"
        >
          <div class="oh pr nt_img_txt bg-transparent">
            <div class="js_full_ht4 img_slider_block dek_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                :data-bgset="event.media.desktop || MainSlide"
              ></div>
            </div>
            <div class="js_full_ht4 img_slider_block mb_img_slide">
              <div
                class="bg_rp_norepeat bg_sz_cover lazyload item__position center center img_tran_ef pa l__0 t__0 r__0 b__0"
                :data-bgset="event.media.mobile || MobileSlide"
              ></div>
            </div>
            <div class="caption-wrap caption-w-1 pe_none z_100 tl_md tc">
              <div class="pa_txts caption">
                <div class="left_right">
                  <h4 class="kalles-digital__slide-banner__title slt4_h4 mg__0 lh__1 f_body">{{ event.event_header }}</h4>
                  <div class="kalles-digital__slide-banner__br-01 slt4_space"></div>
                  <h3 class="kalles-digital__slide-banner__sup-title slt4_h3 lh__1 mg__0">{{ event.event_name }}</h3>
                  <div class="slt4_html">
                    <h3>{{ event.event_subheader }}</h3>
                  </div>
                  <div class="kalles-digital__slide-banner__br-02 slt4_space"></div>
                  <a
                    class="kalles-digital__slide-banner__btn slt4_btn button pe_auto round_true btn_icon_false"
                    href="#"
                  >
                    Eksplorasi sekarang
                  </a>
                </div>
              </div>
            </div>
            <a href="#" class="pa t__0 l__0 b__0 r__0 pe_none"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pa_txts {
  &.caption {
    .slt4_html {
      h3 {
        font-size: 14px;
      }
    }
  }
}

.kalles-digital {
  &__slide-banner {
    &__title {
      padding: 0 1rem;
      font-size: 16px;
      font-weight: 500;
      color: #222222;
    }

    &__sup-title {
      font-size: 20px;
      font-weight: 600;
      color: #222222;
    }

    &__layout-01 {
      .pa_txts {
        top: 11%;
        left: 0%;
        transform: translate(-0%, -0%) !important;
      }
    }
  }
}

@media (min-width: 768px) {
  .pa_txts {
    &.caption {
      .slt4_html {
        h3 {
          font-size: 20px;
        }
      }
    }
  }

  .kalles-digital {
    &__slide-banner {
      &__title {
        padding: 0;
        font-size: 18px;
        font-weight: 500;
        color: #222222;
      }

      &__sup-title {
        font-size: 55px;
      }

      &__layout-01 {
        .pa_txts {
          top: 33%;
          width: auto;
          left: 0%;
          transform: translate(-0%, -21%) !important;
          right: auto;
        }
      }
    }
  }
}
</style>
