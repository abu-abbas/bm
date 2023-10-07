import { useFontAwesome } from '@/js/composable/useFontAwesome'

const {
  addLibrary,
  FontAwesomeIcon,
  faTimes,
  faCheck,
  faEdit,
  faPlus,
  faBars,
  faHouse,
  faHeart,
  faSearch,
  faSquare,
  faSignOutAlt,
  faPeopleGroup,
} = useFontAwesome()

export function registeredFontAwesome(Vue) {
  addLibrary(
    faTimes,
    faCheck,
    faEdit,
    faPlus,
    faBars,
    faHouse,
    faHeart,
    faSearch,
    faSquare,
    faSignOutAlt,
    faPeopleGroup,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}
