import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// https://fontawesome.com/docs/web/use-with/vue/add-icons
export function useFontAwesome() {
  const addLibrary = (...definitions) => library.add(definitions)

  return { addLibrary, FontAwesomeIcon }
}
