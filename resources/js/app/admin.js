import '@/js/bootstrap.js'
import Vue, { createApp } from 'vue'
import MainApp from '@/js/app/Main.vue'
import router from '@/js/router/admin-router.js'
import { configureCompat } from '@/js/compat-config.js'
import RegisteredBootstrapVue from '@/js/app/registered/admin/bootstrap-vue.js'
import { registeredFontAwesome } from '@/js/app/registered/admin/font-awesome.js'

configureCompat(Vue)
registeredFontAwesome(Vue)
Vue.use(RegisteredBootstrapVue)

createApp(MainApp)
  .use(router)
  .mount('#app')
