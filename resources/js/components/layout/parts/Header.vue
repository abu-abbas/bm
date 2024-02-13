<script setup>
import { onMounted } from 'vue'
import { _settings, _redirectToLogin } from '@/js/utils/common.js'
import { useKallesInterface, $header, mobileNav } from '@components/layout/interface.js'

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
                  data-id="#nt_menu_canvas"
                  class="push_side push-menu-btn lh__1 flex al_center pointer"
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
                  <a
                    class="dib pointer"
                    @click="$router.push({ name: 'landing.home' })"
                  >
                    <img
                      class="w__95 logo_normal dn db_lg"
                      src="@theme/logo-kbm.svg"
                      alt="Kalles html template"
                    />
                    <img
                      class="w__100 logo_sticky dn"
                      src="@theme/logo-kbm.svg"
                      alt="Kalles html template"
                    />
                    <img
                      class="w__100 logo_mobile dn_lg"
                      src="@theme/logo-kbm.svg"
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
                  <a
                    v-if="_settings.user"
                    class="icon_like cb chp pr dn db_md js_link_wis pointer"
                    @click="$router.push({ name: 'landing.transaction' })"
                  >
                    Ketertarikan
                  </a>
                  <div class="my-account ts__05 pr dn db_md">
                    <a
                      v-if="!_settings.user"
                      class="cb chp db push_side pointer"
                      @click="_redirectToLogin"
                    >
                      Masuk
                    </a>
                    <a
                      v-else
                      class="cb chp db push_side pointer"
                      onclick="doLogout.apply(this, arguments)"
                    >
                      Keluar
                    </a>
                  </div>
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
          <li
            v-if="_settings.user"
            class="menu-item menu-item-btns menu-item-wishlist"
          >
            <a
              class="js_link_wis"
              @click="$router.push({ name: 'landing.transaction' })"
            >
              <FontAwesomeIcon :icon="['fas', 'cart-shopping']" size="xl"/>
              <span class="ml-2">Ketertarikan</span>
            </a>
          </li>

          <li class="menu-item menu-item-btns menu-item-acount">
            <a
              v-if="!_settings.user"
              class="push_side"
              data-id="#nt_login_canvas"
              @click="_redirectToLogin"
            >
              <FontAwesomeIcon :icon="['fas', 'arrow-right-to-bracket']" size="xl"/>
              <span class="ml-2">Masuk</span>
            </a>
            <a
              v-else
              class="push_side"
              data-id="#nt_login_canvas"
              onclick="doLogout.apply(this, arguments)"
            >
              <FontAwesomeIcon :icon="['fas', 'arrow-right-from-bracket']" size="xl"/>
              <span class="ml-2">Keluar</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div id="kalles-section-toolbar_mobile" class="kalles-section">
    <div class="kalles_toolbar kalles_toolbar_label_true ntpf r__0 l__0 b__0 flex fl_between al_center">
      <div class="type_toolbar_shop kalles_toolbar_item">
        <a class="pointer" @click="$router.push({ name: 'landing.home' })">
          <FontAwesomeIcon :icon="['fas', 'home']" size="lg"/>
          <span class="kalles_toolbar_label">Home</span>
        </a>
      </div>
      <div
        v-if="_settings.user"
        class="type_toolbar_wish kalles_toolbar_item"
      >
        <a
          class="js_link_wis"
          @click="$router.push({ name: 'landing.transaction' })"
        >
          <FontAwesomeIcon :icon="['fas', 'cart-shopping']" size="lg"/>
          <span class="kalles_toolbar_label">Ketertarikan</span>
        </a>
      </div>
      <div class="type_toolbar_account kalles_toolbar_item">
        <a
          v-if="!_settings.user"
          class="push_side"
          data-id="#nt_login_canvas"
          @click="_redirectToLogin"
        >
          <FontAwesomeIcon :icon="['fas', 'arrow-right-to-bracket']" size="xl"/>
          <span class="kalles_toolbar_label">Masuk</span>
        </a>
        <a
          v-else
          class="push_side"
          data-id="#nt_login_canvas"
          onclick="doLogout.apply(this, arguments)"
        >
          <FontAwesomeIcon :icon="['fas', 'arrow-right-from-bracket']" size="xl"/>
          <span class="kalles_toolbar_label">Keluar</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pointer {
  cursor: pointer;
}
</style>
