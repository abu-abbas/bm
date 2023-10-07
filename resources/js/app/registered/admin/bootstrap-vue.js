import {
  TablePlugin,
  ModalPlugin,
} from 'bootstrap-vue'

export default {
  install(Vue) {
    Vue.use(ModalPlugin)
    Vue.use(TablePlugin)
  }
}
