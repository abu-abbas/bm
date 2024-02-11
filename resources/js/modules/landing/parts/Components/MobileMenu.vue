<script setup>
  import { _settings, _redirectToLogin } from '@/js/utils/common.js'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const onHandleCartShoppingClick = () => {
  if (!_settings.user) {
    _redirectToLogin()
    return
  }
  return router.push({ name: 'landing.transaction' })
}
</script>

<template>
  <!-- mobile menu -->
  <div id="nt_menu_canvas" class="nt_fk_canvas nt_sleft dn lazyload">
    <i class="close_pp pegk pe-7s-close ts__03 cd"></i>
    <div class="mb_nav_tabs flex al_center mb_cat_true">
      <div class="mb_nav_title pr mb_nav_ul flex al_center fl_center active mw-100 menutitle" data-id="#kalles-section-mb_nav_js">
        <span class="db truncate">Menu</span>
      </div>
    </div>
    <div id="kalles-section-mb_nav_js" class="mb_nav_tab active">
      <div id="kalles-section-mb_nav" class="kalles-section">
        <ul id="menu_mb_ul" class="nt_mb_menu">
          <li class="menu-item menu-item-btns menu-item-wishlist">
            <a class="js_link_wis" @click="onHandleCartShoppingClick"><span class="iconbtns">Ketertarikan</span></a>
          </li>
          <li v-if="!_settings.user" class="menu-item menu-item-btns menu-item-acount">
            <a class="push_side" data-id="#nt_login_canvas" @click="_redirectToLogin()"><span class="iconbtns">Login / Register</span></a>
          </li>
          <li v-else else class="menu-item menu-item-btns menu-item-acount">
            <a class="push_side" data-id="#nt_login_canvas" onclick="doLogout.apply(this, arguments)"><span class="iconbtns">Logout</span></a>
          </li>
          <!-- <li class="menu-item menu-item-btns menu-item-acount">
            <router-link to="/login" class="push_side"><span class="iconbtns">Login / Register</span></router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
<!-- end mobile menu -->
</template>
<style>
.menutitle{
  flex: 0 0 100% !important;
}
</style>
