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
  <div id="kalles-section-toolbar_mobile" class="kalles-section">
    <div class="kalles_toolbar kalles_toolbar_label_true ntpf r__0 l__0 b__0 flex fl_between al_center">
      <div class="type_toolbar_shop kalles_toolbar_item">
        <a href="/">
          <span class="toolbar_icon"></span>
          <span class="kalles_toolbar_label">Home</span>
        </a>
      </div>
      <div class="type_toolbar_wish kalles_toolbar_item">
        <a class="js_link_wis" @click="onHandleCartShoppingClick" >
          <span class="toolbar_icon">
            <!-- <span class="jswcount toolbar_count">3</span> -->
          </span>
          <span class="kalles_toolbar_label">Ketertarikan</span>
        </a>
      </div>
      <div class="type_toolbar_account kalles_toolbar_item">
        <a v-if="!_settings.user" class="push_side" data-id="#nt_login_canvas" @click="_redirectToLogin()">
          <span class="toolbar_icon"></span>
          <span class="kalles_toolbar_label">Login</span>
        </a>
        <a v-else class="push_side" data-id="#nt_login_canvas" onclick="doLogout.apply(this, arguments)">
          <span class="toolbar_icon"></span>
          <span class="kalles_toolbar_label">Logout</span>
        </a>
      </div>
    </div>
  </div>
</template>
