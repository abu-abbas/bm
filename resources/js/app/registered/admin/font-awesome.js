import { useFontAwesome } from '@/js/composable/useFontAwesome'

import {
  faBars,
  faHeart,
  faSignOutAlt,
  faHouse,
  faPeopleGroup,
  faTimes,
  faCheck,
  faEdit,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

import {
  faSquare,
  faImage
} from '@fortawesome/free-regular-svg-icons'

const { addLibrary, FontAwesomeIcon } = useFontAwesome()

export function registeredFontAwesome(Vue) {
  addLibrary(
    faEdit,
    faPlus,
    faBars,
    faCheck,
    faHouse,
    faHeart,
    faTimes,
    faImage,
    faSearch,
    faSquare,
    faSignOutAlt,
    faPeopleGroup,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
