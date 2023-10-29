import { useFontAwesome } from '@/js/composable/useFontAwesome'

import {
  faPlus,
  faSearch,
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
    faPlus,
    faImage,
    faSearch,
    faArrowLeft,
    faCartShopping,
    faArrowRightToBracket,
    faArrowRightFromBracket,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
