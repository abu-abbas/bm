import { useFontAwesome } from '@/js/composable/useFontAwesome'

import {
  faPlus,
  faEdit,
  faBars,
  faSave,
  faHeart,
  faHouse,
  faTimes,
  faCheck,
  faQrcode,
  faSearch,
  faTrashAlt,
  faCropSimple,
  faInfoCircle,
  faSignOutAlt,
  faPeopleGroup,
  faExclamationCircle,
  faBoxes,
} from '@fortawesome/free-solid-svg-icons'

import {
  faSquare,
  faImage,
} from '@fortawesome/free-regular-svg-icons'

const { addLibrary, FontAwesomeIcon } = useFontAwesome()

export function registeredFontAwesome(Vue) {
  addLibrary(
    faSave,
    faEdit,
    faPlus,
    faBars,
    faCheck,
    faHouse,
    faHeart,
    faTimes,
    faImage,
    faQrcode,
    faSearch,
    faSquare,
    faTrashAlt,
    faInfoCircle,
    faCropSimple,
    faSignOutAlt,
    faPeopleGroup,
    faExclamationCircle,
    faBoxes,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
