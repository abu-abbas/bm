<script setup>
import { onMounted } from 'vue'
import { useKallesInterface, $header, mobileNav } from '@/js/modules/tandingan/interface.js'

const themeSetting = useKallesInterface()
onMounted(() => themeSetting.initStickyMenu())
</script>

<template>
  <header id="ntheader" ref="$header" class="ntheader header_3 h_icon_iccl">
    <div class="ntheader_wrapper pr z_200">
      <div id="kalles-section-header_3" class="kalles-section sp_header_mid">
        <div class="header__mid">
          <div class="container">
            <div class="row al_center css_h_se">
              <div class="col-md-4 col-3 dn_lg">
                <a
                  :ref="el => mobileNav.open = el"
                  href="#"
                  data-id="#nt_menu_canvas"
                  class="push_side push-menu-btn lh__1 flex al_center"
                  @click="themeSetting.sideMenu(open = true)"
                >
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

  <div
    id="nt_menu_canvas"
    :ref="el => mobileNav.menu = el"
    class="nt_fk_canvas nt_sleft dn lazyload"
  >
    <i
      :ref="el => mobileNav.close = el"
      class="close_pp pegk pe-7s-close ts__03 cd"
      @click="themeSetting.sideMenu(open = false)"
    >
    </i>
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
</template>
