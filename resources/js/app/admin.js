import '@/js/bootstrap.js'
import Vue, { createApp } from 'vue'
import MainApp from '@/js/MainApp.vue'
import router from '@/js/router/admin-router.js'
import { configureCompat } from '@/js/compat-config.js'
import { useFontAwesome } from '@/js/composable/useFontAwesome'

const {
  addLibrary,
  FontAwesomeIcon,
  faBars,
  faHouse,
  faHeart,
  faSquare,
  faSignOutAlt,
  faPeopleGroup,
} = useFontAwesome()

configureCompat(Vue)

addLibrary(faBars, faHouse, faHeart, faSquare, faSignOutAlt, faPeopleGroup)
Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(MainApp)
  .use(router)
  .mount('#app')
