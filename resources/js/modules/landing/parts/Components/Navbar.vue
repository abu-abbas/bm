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
  <header id="ntheader" class="ntheader header_9 h_icon_la">
    <div class="ntheader_wrapper pr z_200">
      <div id="kalles-section-header_9" class="kalles-section sp_header_mid">
        <div class="header__mid header__mid9">
          <div class="container">
            <div class="row al_center css_h_se">
              <div class="col-md-4 col-3 dn_lg">
                <a href="#" data-id='#nt_menu_canvas' class="push_side push-menu-btn  lh__1 flex al_center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                    <rect width="30" height="1.5"></rect>
                    <rect y="7" width="20" height="1.5"></rect>
                    <rect y="14" width="30" height="1.5"></rect>
                  </svg>
                </a></div>
              <div class="col-lg-auto col-md-4 col-6 tc tl_lg">
                <div class=" branding ts__05 lh__1">
                  <a class="dib" href="/">
                    KBM
                  </a>
                </div>
              </div>
              <div class="col dn db_lg">
                <nav class="nt_navigation tl hover_side_up nav_arrow_false">
                  <ul id="nt_menu_id" class="nt_menu in_flex wrap al_center">
                    <li class="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                      <a class="lh__1 flex al_center pr" href="/">Home</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-lg-auto col-md-4 col-3 tr">
                <div class="nt_action in_flex al_center cart_des_1">
                  <div v-if="!_settings.user" class="my-account ts__05 pr dn db_md">
                    <a class="cb chp db push_side" data-id="#nt_login_canvas" @click="_redirectToLogin()"><i class="las la-user"></i></a>
                  </div>
                  <a class="icon_like cb chp pr dn db_md js_link_wis" @click="onHandleCartShoppingClick"><i class="lar la-heart pr"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
