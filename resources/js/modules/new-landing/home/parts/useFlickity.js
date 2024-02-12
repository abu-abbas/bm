import { ref } from 'vue'
import Flickity from 'flickity'

const flickity = ref({
  ref: null,
  el: null,
})

const defaultSettings = {
  fade: 0,
  cellAlign: 'center',
  imagesLoaded: 0,
  lazyLoad: 0,
  freeScroll: 0,
  wrapAround: true,
  autoPlay: false,
  pauseAutoPlayOnHover: true,
  rightToLeft: false,
  prevNextButtons: false,
  pageDots: true,
  contain: 1,
  adaptiveHeight: 1,
  dragThreshold: 5,
  percentPosition: 1
}

const useFlickity = () => {
  const initialize = (settings = {}) => {
    if (!flickity.value) return

    const flickitySettings = settings == {} ? defaultSettings : settings
    flickity.value.el = new Flickity(flickity.value.ref, flickitySettings)
  }

  const initializeCustomRef = (ref, el, settings = {}) => {
    if (!ref) return

    const flickitySettings = settings == {} ? defaultSettings : settings
    el = new Flickity(ref, flickitySettings)
  }

  return {
    initialize,
    initializeCustomRef,
  }
}

export {
  flickity,
  useFlickity
}
