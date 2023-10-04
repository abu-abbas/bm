import '@/js/bootstrap.js'
import Vue, { createApp } from 'vue'
import LoginForm from '@/js/modules/auth/Index.vue'
import { configureCompat } from '@/js/compat-config.js'

import {
  BIcon,
  ImagePlugin,
  ModalPlugin,
  BIconLink45deg,
  BIconCircleFill,
  BIconCheck2Circle,
} from 'bootstrap-vue'

Vue.use(ImagePlugin)
Vue.use(ModalPlugin)

Vue.component('BIcon', BIcon)
Vue.component('BIconLink45deg', BIconLink45deg)
Vue.component('BIconCircleFill', BIconCircleFill)
Vue.component('BIconCheck2Circle', BIconCheck2Circle)

configureCompat(Vue)
const app = createApp(LoginForm)
app.mount('#app')
