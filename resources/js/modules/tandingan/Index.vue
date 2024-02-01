<script setup>
import { _ } from '@/js/utils/common.js'
import { ref, onMounted, onUnmounted } from 'vue'
import Flickity from 'flickity'

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
  <div class="tandingan-wrapper">
    <div id="nt_wrapper">
      <!-- header -->
      <header id="ntheader" class="ntheader header_3 h_icon_iccl">
        <div class="ntheader_wrapper pr z_200">
          <div id="kalles-section-header_3" class="kalles-section sp_header_mid">
            <div class="header__mid">
              <div class="container">
                <div class="row al_center css_h_se">
                  <div class="col-md-4 col-3 dn_lg">
                    <a href="#" data-id="#nt_menu_canvas" class="push_side push-menu-btn lh__1 flex al_center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                        <rect width="30" height="1.5"></rect>
                        <rect y="7" width="20" height="1.5"></rect>
                        <rect y="14" width="30" height="1.5"></rect>
                      </svg>
                    </a>
                  </div>
                  <div class="col-lg-2 col-md-4 col-6 tc tl_lg">
                    <div class="branding ts__05 lh__1">
                      <a class="dib" href="index.html">
                        <img
                          class="w__95 logo_normal dn db_lg"
                          src="assets/images/home-digital/kalles-h-logo.svg"
                          alt="Kalles html template"
                        />
                        <img
                          class="w__100 logo_sticky dn"
                          src="assets/images/home-digital/kalles-h-logo.svg"
                          alt="Kalles html template"
                        />
                        <img
                          class="w__100 logo_mobile dn_lg"
                          src="assets/images/home-digital/kalles-h-logo.svg"
                          alt="Kalles html template"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col dn db_lg">
                    <nav class="nt_navigation tc hover_side_up nav_arrow_false">&nbsp;</nav>
                  </div>
                  <div class="col-lg-auto col-md-4 col-3 tr col_group_btns">
                    <div class="nt_action in_flex al_center cart_des_1">
                      <div class="my-account ts__05 pr dn db_md">
                        <a class="cb chp db push_side" href="#" data-id="#nt_login_canvas">
                          <i class="iccl iccl-user"></i>
                        </a>
                      </div>
                      <a class="icon_like cb chp pr dn db_md js_link_wis" href="#">
                        <i class="iccl iccl-heart pr"><span class="op__0 ts_op pa tcount bgb br__50 cw tc">0</span></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- end header -->
      <div id="nt_content">
        <!-- main slide -->
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
        <!-- end main slide -->

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
                        <div class="product-image pr oh lazyload">
                          <span class="tc nt_labels pa pe_none cw">
                            <span class="onsale nt_label">
                              <span>-9%</span>
                            </span>
                          </span>
                          <a class="db" href="product-detail-layout-01.html">
                            <div
                              class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                              data-bgset="assets/images/home-digital/pr-11.jpg"
                            ></div>
                          </a>
                          <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                            <div
                              class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                              data-bgset="assets/images/home-digital/pr-12.jpg"
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
                            <a class="cd chp" href="product-detail-layout-01.html">Smart Watches 4</a>
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
        <div class="kalles-section nt_section type_featured_collection tp_se_cdt">
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
        </div>
        <!--end bestselling section-->
      </div>

      <!-- footer -->
      <footer id="nt_footer" class="bgbl footer-1">
        <div id="kalles-section-footer_bot" class="kalles-section footer__bot">
          <div class="footer__bot_wrap pt__20 pb__20">
            <div class="container pr tc">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-12 col_1">
                  Copyright © 2021 <span class="cp">Kalles</span> all rights reserved. Powered by <a href="#">The4</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- end footer -->
    </div>

    <!--mask overlay-->
    <div class="mask-overlay ntpf t__0 r__0 l__0 b__0 op__0 pe_none"></div>
    <!--end mask overlay-->

    <!-- login box -->
    <div id="nt_login_canvas" class="nt_fk_canvas dn lazyload">
      <form id="customer_login" class="nt_mini_cart flex column h__100 is_selected">
        <div class="mini_cart_header flex fl_between al_center">
          <div class="h3 widget-title tu fs__16 mg__0">Login</div>
          <i class="close_pp pegk pe-7s-close ts__03 cd"></i>
        </div>
        <div class="mini_cart_wrap">
          <div class="mini_cart_content fixcl-scroll">
            <div class="fixcl-scroll-content">
              <p class="form-row">
                <label for="CustomerEmail">Email <span class="required">*</span></label>
                <input id="CustomerEmail" type="email" name="email" autocomplete="email" autocapitalize="off" />
              </p>
              <p class="form-row">
                <label for="CustomerPassword">Password <span class="required">*</span></label>
                <input id="CustomerPassword" type="password" value="" name="password" autocomplete="current-password"/>
              </p>
              <input type="submit" class="button button_primary w__100 tu js_add_ld" value="Sign In" />
              <br />
              <p class="mb__10 mt__20">
                New customer?
                <a href="#" data-id="#RegisterForm" class="link_acc">Create your account</a>
              </p>
              <p>
                Lost password?
                <a href="#" data-id="#RecoverForm" class="link_acc">Recover password</a>
              </p>
            </div>
          </div>
        </div>
      </form>

      <form id="RecoverForm" class="nt_mini_cart flex column h__100">
        <div class="mini_cart_header flex fl_between al_center">
          <div class="h3 widget-title tu fs__16 mg__0">Recover password</div>
          <i class="close_pp pegk pe-7s-close ts__03 cd"></i>
        </div>
        <div class="mini_cart_wrap">
          <div class="mini_cart_content fixcl-scroll">
            <div class="fixcl-scroll-content">
              <p class="form-row">
                <label for="RecoverEmail">Email address</label>
                <input
                  id="RecoverEmail"
                  type="email"
                  value=""
                  name="email"
                  class="input-full"
                  autocomplete="email"
                  autocapitalize="off"
                />
              </p>
              <input type="submit" class="button button_primary w__100 tu js_add_ld" value="Reset Password" />
              <br />
              <p class="mb__10 mt__20">
                Remembered your password?
                <a href="#" data-id="#customer_login" class="link_acc">Back to login</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- end login box -->

    <!-- mobile toolbar -->
    <div id="kalles-section-toolbar_mobile" class="kalles-section">
      <div class="kalles_toolbar kalles_toolbar_label_true ntpf r__0 l__0 b__0 flex fl_between al_center">
        <div class="type_toolbar_shop kalles_toolbar_item">
          <a href="shop-filter-options.html">
            <span class="toolbar_icon"></span>
            <span class="kalles_toolbar_label">Home</span>
          </a>
        </div>
        <div class="type_toolbar_wish kalles_toolbar_item">
          <a class="js_link_wis" href="wishlist.html">
            <span class="toolbar_icon">
              <span class="jswcount toolbar_count">3</span>
            </span>
            <span class="kalles_toolbar_label">Wishlist</span>
          </a>
        </div>
        <div class="type_toolbar_account kalles_toolbar_item">
          <a href="#" class="push_side" data-id="#nt_login_canvas">
            <span class="toolbar_icon"></span>
            <span class="kalles_toolbar_label">Account</span>
          </a>
        </div>
      </div>
    </div>
    <!-- end mobile toolbar -->

    <!-- mobile menu -->
    <div id="nt_menu_canvas" class="nt_fk_canvas nt_sleft dn lazyload">
      <i class="close_pp pegk pe-7s-close ts__03 cd"></i>
      <div class="mb_nav_tabs flex al_center mb_cat_true">
        <div class="mb_nav_title pr mb_nav_ul flex al_center fl_center active" data-id="#kalles-section-mb_nav_js">
          <span class="db truncate">Menu</span>
        </div>
      </div>
      <div id="kalles-section-mb_nav_js" class="mb_nav_tab active">
        <div id="kalles-section-mb_nav" class="kalles-section">
          <ul id="menu_mb_ul" class="nt_mb_menu">
            <li class="menu-item menu-item-btns menu-item-wishlist">
              <a class="js_link_wis" href="wishlist.html"><span class="iconbtns">Wishlist</span></a>
            </li>

            <li class="menu-item menu-item-btns menu-item-acount">
              <a href="#" class="push_side" data-id="#nt_login_canvas">
                <span class="iconbtns">Login / Register</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end mobile menu -->

    <!-- back to top button-->
    <a id="nt_backtop" class="pf br__50 z__100 des_bt1" href="#">
      <span class="tc br__50 db cw"><i class="pr pegk pe-7s-angle-up"></i></span>
    </a>
  </div>
</template>

<style lang="scss">
@import '@theme/kalles/assets/css/font-icon.min.css';
@import '@theme/kalles/assets/css/reset.css';
@import '@theme/kalles/assets/css/defined.css';
@import '@theme/kalles/assets/css/base.css';
@import '@theme/kalles/assets/css/style.css';
@import '@theme/kalles/assets/css/home-digital.css';

$font-family-sans-serif: Poppins, sans-serif;

.kalles-digital {
  &__slide-banner {
    * {
      font-family: $font-family-sans-serif !important;
    }
  }
}

.kalles-section {
  .product-info {
    * {
      font-family: $font-family-sans-serif !important;
    }
  }
}
</style>

