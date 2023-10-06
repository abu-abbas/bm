import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
  faHeart,
  faSignOutAlt,
  faHouse,
  faPeopleGroup
} from '@fortawesome/free-solid-svg-icons'

import {
  faSquare,
} from '@fortawesome/free-regular-svg-icons'

// https://fontawesome.com/docs/web/use-with/vue/add-icons
export function useFontAwesome() {
  const addLibrary = (...definitions) => library.add(definitions)

  return {
    addLibrary,
    FontAwesomeIcon,
    faBars,
    faHouse,
    faHeart,
    faSquare,
    faSignOutAlt,
    faPeopleGroup,
  }
}
