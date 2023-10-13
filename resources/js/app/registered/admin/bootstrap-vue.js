import {
  TablePlugin,
  ModalPlugin,
  DropdownPlugin,
  PaginationPlugin,
} from 'bootstrap-vue'

export default {
  install(Vue) {
    Vue.use(ModalPlugin)
    Vue.use(TablePlugin)
    Vue.use(DropdownPlugin)
    Vue.use(PaginationPlugin)
  }
}
