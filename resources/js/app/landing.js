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

//KALLES
import "../../kalles/css/font-icon.min.css"
import "../../kalles/css/bootstrap.min.css"
import "../../kalles/css/reset.css"
import "../../kalles/css/defined.css"
import "../../kalles/css/base.css"
import "../../kalles/css/style.css"
import "../../kalles/css/home-electronic.css"
import "../../kalles/js/jquery-3.5.1.min.js"
import "../../kalles/js/jarallax.min.js"
import "../../kalles/js/packery.pkgd.min.js"
import "../../kalles/js/jquery.hoverIntent.min.js"
import "../../kalles/js/magnific-popup.min.js"
import "../../kalles/js/flickity.pkgd.min.js"
import "../../kalles/js/lazysizes.min.js"
import "../../kalles/js/js-cookie.min.js"
import "../../kalles/js/jquery.countdown.min.js"
import "../../kalles/js/interface.js"

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
