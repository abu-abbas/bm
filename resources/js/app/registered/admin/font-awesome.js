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
  faTrashAlt,
  faCropSimple,
  faSave,
  faInfoCircle,
  faExclamationCircle,
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
    faSearch,
    faSquare,
    faTrashAlt,
    faInfoCircle,
    faCropSimple,
    faSignOutAlt,
    faPeopleGroup,
    faExclamationCircle,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
