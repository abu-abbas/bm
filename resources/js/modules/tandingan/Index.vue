<script setup>
import { onMounted } from 'vue'
import { useKallesInterface, $mask } from '@/js/modules/tandingan/interface.js'
import '@theme/kalles/assets/js/lazysizes.min.js'

import Footer from '@/js/modules/tandingan/parts/Footer.vue'
import HeaderNav from '@/js/modules/tandingan/parts/Header.vue'
import MainSlide from '@/js/modules/tandingan/parts/MainSlide.vue'
import BackToTop from '@/js/modules/tandingan/parts/BackToTop.vue'
import image11 from '@theme/kalles/assets/images/home-digital/pr-10.jpg'

const themeSetting = useKallesInterface()
onMounted(() => themeSetting.addClassesToBody())
</script>

<template>
  <div class="tandingan-wrapper">
    <div id="nt_wrapper">
      <HeaderNav />
      <div id="nt_content">
        <MainSlide />

        <!--tab section-->
        <div class="kalles-section nt_section type_tab type_tab_collection tp_se_cdt">
          <div class="kalles-digital__rounded-tab container">
            <div class="wrap_title des_title_1">
              <h3 class="section-title tc pr flex fl_center al_center fs__24 title_1">
                <span class="mr__10 ml__10">Featured Collection</span>
              </h3>
              <span class="dn tt_divider"><span></span><i class="dn clprfalse title_1 la-gem"></i><span></span></span
              ><span class="section-subtitle db tc sub-title"></span>
            </div>
            <div class="tab_se_wrap">
              <div class="tab_se_header tc mt__30">
                <ul class="tab_cat_title ul_none des_tab_3">
                  <li class="dib">
                    <a class="js_t4_tab tt_active" data-bid="accessories" href="#"><span>Accessories</span></a>
                  </li>
                  <li class="dib">
                    <a class="js_t4_tab" data-bid="smart-tv" href="#"><span>Smart TV</span></a>
                  </li>
                  <li class="dib">
                    <a class="js_t4_tab" data-bid="camera" href="#"><span>Camera</span></a>
                  </li>
                  <li class="dib">
                    <a class="js_t4_tab" data-bid="digital" href="#"><span>Digital</span></a>
                  </li>
                </ul>
              </div>
              <div class="tab_se_content">
                <div
                  v-for="(item, idx) in ['accessories', 'smart-tv', 'camera', 'digital']"
                  :id="item"
                  :key="idx"
                  :class="{
                    'tab_se_element tab__accessories': true,
                    'ct_active': idx == 0
                  }"
                >
                  <div
                    class="products nt_products_holder row fl_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30"
                  >
                    <div
                      v-for="i in 8"
                      :key="i"
                      class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
                    >
                      <div class="product-inner pr">
                        <div class="product-image pr oh">
                          <span class="tc nt_labels pa pe_none cw">
                            <span class="onsale nt_label">
                              <span>-9%</span>
                            </span>
                          </span>
                          <a class="db" href="#">
                            <div
                              class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                              :data-bgset="image11"
                            ></div>
                          </a>
                          <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                            <div
                              class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                              :data-bgset="image11"
                            ></div>
                          </div>
                          <div class="nt_add_w ts__03 pa">
                            <a href="#" class="wishlistadd cb chp ttip_nt tooltip_right">
                              <span class="tt_txt">Add to Wishlist</span><i class="facl facl-heart-o"></i>
                            </a>
                          </div>
                          <div class="hover_button op__0 tc pa flex column ts__03">
                            <a
                              class="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                              href="#"
                            >
                              <span class="tt_txt">Quick view</span><i class="iccl iccl-eye"></i><span>Quick view</span>
                            </a>
                            <a href="#" class="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                              <span class="tt_txt">Add to cart</span><i class="iccl iccl-cart"></i
                              ><span>Add to cart</span>
                            </a>
                          </div>
                        </div>
                        <div class="product-info mt__15">
                          <h3 class="product-title pr fs__14 mg__0 fwm">
                            <a class="cd chp" href="#">Smart Watches 4</a>
                          </h3>
                          <span class="price dib mb__5">
                            <del><span class="money">$350.00</span></del>
                            <ins><span class="money">$320.00</span></ins>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end tab section-->

        <!--bestselling section-->
        <!-- <div class="kalles-section nt_section type_featured_collection tp_se_cdt mt-5">
          <div class="kalles-digital__bestselling-section container">
            <div class="wrap_title des_title_1">
              <h3 class="section-title tc pr flex fl_center al_center fs__24 title_1">
                <span class="mr__10 ml__10">Best Selling</span>
              </h3>
              <span class="dn tt_divider"><span></span><i class="dn clprfalse title_1 la-gem"></i><span></span></span
              ><span class="section-subtitle db tc sub-title"></span>
            </div>
            <div
              :class="[
                'products',
                'nt_products_holder',
                'row',
                'fl_center',
                'row_pr_1',
                'cdt_des_1',
                'round_cd_false',
                'nt_cover',
                'ratio_nt',
                'position_8',
                'space_30',
              ]"
            >
              <div
                v-for="i in 8"
                :key="i"
                class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
              >
                <div class="product-inner pr">
                  <div class="product-image pr oh lazyload">
                    <span class="tc nt_labels pa pe_none cw">
                      <span class="onsale nt_label"><span>-24%</span></span>
                    </span>
                    <a class="db" href="product-detail-layout-01.html">
                      <div
                        class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                        data-bgset="assets/images/home-digital/pr-01.jpg"
                      ></div>
                    </a>
                    <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div
                        class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                        data-bgset="assets/images/home-digital/pr-02.jpg"
                      ></div>
                    </div>
                    <div class="nt_add_w ts__03 pa">
                      <a href="#" class="wishlistadd cb chp ttip_nt tooltip_right">
                        <span class="tt_txt">Add to Wishlist</span><i class="facl facl-heart-o"></i>
                      </a>
                    </div>
                    <div class="hover_button op__0 tc pa flex column ts__03">
                      <a
                        class="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                        href="#"
                      >
                        <span class="tt_txt">Quick view</span><i class="iccl iccl-eye"></i><span>Quick view</span>
                      </a>
                      <a href="#" class="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span class="tt_txt">Add to cart</span><i class="iccl iccl-cart"></i><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div class="product-info mt__15">
                    <h3 class="product-title pr fs__14 mg__0 fwm">
                      <a class="cd chp" href="product-detail-layout-01.html">Video & Air Quality Monitor</a>
                    </h3>
                    <span class="price dib mb__5">
                      <del><span class="money">$312.00</span></del>
                      <ins><span class="money">$239.00</span></ins>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!--end bestselling section-->
      </div>

      <Footer />
    </div>

    <div ref="$mask" class="mask-overlay ntpf t__0 r__0 l__0 b__0 op__0 pe_none"></div>

    <BackToTop />
  </div>
</template>

<style lang="scss"></style>

