import '@/js/bootstrap.js'
import Vue, { createApp } from 'vue'
import MainApp from '@/js/modules/landing/Index.vue'
import router from '@/js/router/landing-router.js'

import { configureCompat } from '@/js/compat-config.js'
// import RegisteredBootstrapVue from '@/js/app/registered/admin/bootstrap-vue.js'
// import { registeredFontAwesome } from '@/js/app/registered/admin/font-awesome.js'

// vee-validate config
import * as rules from '@vee-validate/rules'
import { defineRule, configure } from 'vee-validate'
import id from '@vee-validate/i18n/dist/locale/id.json'
import { localize, setLocale } from '@vee-validate/i18n'
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue'

// Vue.use(ImagePlugin)
// Vue.use(ModalPlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

configure({ generateMessage: localize({ id }) })
Object.keys(rules).forEach(rule => defineRule(rule, rules[rule]))
setLocale('id')

configureCompat(Vue)
// Vue.component('BIcon', BIcon)
// Vue.component('BIconLink45deg', BIconLink45deg)
// Vue.component('BIconArrowLeft', BIconArrowLeft)
// Vue.component('BIconCircleFill', BIconCircleFill)
// Vue.component('BIconCheck2Circle', BIconCheck2Circle)
// registeredFontAwesome(Vue)
// Vue.use(RegisteredBootstrapVue)

createApp(MainApp)
  .use(router)
  .mount('#app')
