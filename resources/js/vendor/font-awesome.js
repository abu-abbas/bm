import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
} from '@fortawesome/free-solid-svg-icons'

import {
  faSquare
} from '@fortawesome/free-regular-svg-icons'

// https://fontawesome.com/docs/web/use-with/vue/add-icons
export function settingUp(Vue) {
  library.add(faBars, faSquare)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
