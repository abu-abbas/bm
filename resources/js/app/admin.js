import '@/js/bootstrap.js'
import { createPinia } from 'pinia'
import Vue, { createApp } from 'vue'
import MainApp from '@/js/modules/admin/Index.vue'
import router from '@/js/router/admin-router.js'

// global component
import SectionHeader from '@/js/components/SectionHeader.vue'

import { configureCompat } from '@/js/compat-config.js'
import RegisteredBootstrapVue from '@/js/app/registered/admin/bootstrap-vue.js'
import { registeredFontAwesome } from '@/js/app/registered/admin/font-awesome.js'

// vee-validate config
import * as rules from '@vee-validate/rules'
import { defineRule, configure } from 'vee-validate'
import id from '@vee-validate/i18n/dist/locale/id.json'
import { localize, setLocale } from '@vee-validate/i18n'

import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css';

configure({ generateMessage: localize({ id }) })
Object.keys(rules).forEach(rule => defineRule(rule, rules[rule]))
setLocale('id')

configureCompat(Vue)
registeredFontAwesome(Vue)
Vue.use(RegisteredBootstrapVue)
Vue.component('VueMultiselect', VueMultiselect)

const pinia = createPinia()

createApp(MainApp)
  .component('SectionHeader', SectionHeader)
  .use(router)
  .use(pinia)
  .mount('#app')
