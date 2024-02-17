import { useFontAwesome } from '@/js/composable/useFontAwesome'

import {
  faHome,
  faPlus,
  faSearch,
  faQrcode,
  faUserAlt,
  faArrowLeft,
  faCartShopping,
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

import {
  faImage,
} from '@fortawesome/free-regular-svg-icons'

const { addLibrary, FontAwesomeIcon } = useFontAwesome()

export function registeredFontAwesome(Vue) {
  addLibrary(
    faHome,
    faPlus,
    faImage,
    faQrcode,
    faSearch,
    faUserAlt,
    faArrowLeft,
    faCartShopping,
    faArrowRightToBracket,
    faArrowRightFromBracket,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
