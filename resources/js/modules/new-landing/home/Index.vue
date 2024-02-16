<script setup>
import { _settings } from '@/js/utils/common.js'
import { formatCurrency } from '@/js/utils/formatter.js'
import MainLayout from '@/js/components/layout/Index.vue'
import Slider from '@modules/new-landing/home/parts/MainSlide.vue'
import image11 from '@theme/kalles/assets/images/home-digital/pr-10.jpg'
</script>

<template>
  <MainLayout>
    <div class="home-wrapper">
      <Slider />

      <div class="kalles-section nt_section type_tab type_tab_collection tp_se_cdt">
        <div class="kalles-digital__rounded-tab container">
          <div class="wrap_title des_title_1">
            <h3 class="section-title tc pr flex fl_center al_center fs__24 title_1">
              <span class="mr__10 ml__10">Produk Terbaru</span>
            </h3>
            <span class="dn tt_divider">
              <span></span>
              <i class="dn clprfalse title_1 la-gem"></i>
              <span></span>
            </span>
            <span class="section-subtitle db tc sub-title"></span>
          </div>
          <div class="tab_se_wrap">
            <div class="tab_se_content">
              <div
                class="products nt_products_holder row fl_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30 justify-content-start"
              >
                <div
                  v-for="product in _settings.products"
                  :key="product.slug"
                  class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
                >
                  <div class="product-inner pr">
                    <div class="product-image pr oh">
                      <span class="tc nt_labels pa pe_none cw">
                        <span class="onsale nt_label">
                          <span>TKDN {{ product.tkdn_value }}%</span>
                        </span>
                      </span>
                      <a
                        class="db pointer"
                        @click="$router.push({
                          name: 'tenant.product',
                          params: {
                            tenantSlug: product.tenant_slug,
                            productSlug: product.slug
                          }
                        })"
                      >
                        <div
                          class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                          :data-bgset="product.images[0] || image11"
                        >
                        </div>
                      </a>
                      <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                        <div
                          class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                          :data-bgset="product.images[0] || image11"
                        >
                        </div>
                      </div>
                    </div>
                    <div class="product-info mt__15">
                      <h3 class="product-title pr fs__14 mg__0 fwm">
                        <a
                          class="cd chp pointer"
                          @click="$router.push({
                            name: 'tenant.product',
                            params: {
                              tenantSlug: product.tenant_slug,
                              productSlug: product.slug
                            }
                          })"
                        >
                          {{ product.product_name }}
                        </a>
                      </h3>
                      <span class="price dib mb__5">
                        <!-- <del><span class="money">$350.00</span></del> -->
                        <span class="money text-danger">{{ formatCurrency(product.price) }}</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              <div
                v-if="_settings.products.length < _settings.product_count"
                class="row mt-5"
              >
                <div class="col-12 text-center">
                  <a
                    class="kalles-digital__slide-banner__btn slt4_btn button pe_auto round_true btn_icon_false"
                    href="#"
                  >
                    Lihat lebih banyak
                  </a>
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
.home-wrapper {
  .pa_txts {
    top: 11% !important;
    left: 0% !important;
    transform: translate(10%,-11%) !important;
  }
}
</style>
