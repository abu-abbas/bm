import '@/js/bootstrap.js'
import { createPinia } from 'pinia'
import Vue, { createApp } from 'vue'
import MainApp from '@/js/modules/landing/Index.vue'
import router from '@/js/router/landing-router.js'


import { configureCompat } from '@/js/compat-config.js'
import RegisteredBootstrapVue from '@/js/app/registered/landing/bootstrap-vue.js'
import { registeredFontAwesome } from '@/js/app/registered/landing/font-awesome.js'

// vee-validate config
import * as rules from '@vee-validate/rules'
import { defineRule, configure } from 'vee-validate'
import id from '@vee-validate/i18n/dist/locale/id.json'
import { localize, setLocale } from '@vee-validate/i18n'

import VueMultiselect from 'vue-multiselect'



// //KALLES
import '@theme/kalles/assets/css/font-icon.min.css'
import '@theme/kalles/assets/css/bootstrap.min.css'
import '@theme/kalles/assets/css/reset.css'
import '@theme/kalles/assets/css/defined.css'
import '@theme/kalles/assets/css/base.css'
import '@theme/kalles/assets/css/style.css'
import '@theme/kalles/assets/css/home-medical.css'
import '@theme/kalles/assets/css/home-static-image.css'
import '@theme/kalles/assets/css/single-product.css'
import '@theme/kalles/assets/css/photoswipe.css'
import '@theme/kalles/assets/css/home-default.css'
import '@theme/kalles/assets/css/single-masonry-theme.css'

import '@theme/kalles/assets/js/interface.js'

configure({ generateMessage: localize({ id }) })
Object.keys(rules).forEach(rule => defineRule(rule, rules[rule]))
setLocale('id')

configureCompat(Vue)
registeredFontAwesome(Vue)
Vue.use(RegisteredBootstrapVue)
Vue.component('VueMultiselect', VueMultiselect)

const pinia = createPinia()

createApp(MainApp)
  .use(router)
  .use(pinia)
  .mount('#app')
