import { ref } from 'vue'
import Flickity from 'flickity'

export const $header = ref(null)
export const flickity = ref({
  ref: null,
  el: null
})

export function useKallesInterface() {
  const body = document.body
  const window_w = window.innerWidth

  const check = ref(false)
  const ckSticky = ref(true)
  const headerHeight = ref(0)

  const init = () => {
    if (!$header.value) return

    ckSticky.value = true
    $header.value.classList.remove('sticky_prepared')
    $header.value.style.height = ''

    if (headerHeight.value < $header.value.clientHeight)
      headerHeight.value = $header.value.clientHeight

    if (body.classList.contains('des_header_7') && window_w > 1024) return

    ckSticky.value = false
    $header.value.classList.add('sticky_prepared')
    $header.value.style.height = headerHeight.value
  }

  const initStickyMenu = () => {
    const isHideOnScroll = ref(body.classList.contains('hide_scrolld_true'))
    const prevScrollpos = ref(window.scrollY)
    const offset = ref(headerHeight.value)

    if (
      body.classList.contains('header_sticky_false')
      || (
        body.classList.contains('des_header_7')
        && window_w > 1400
      )
    ) return

    init()

    window.addEventListener('resize', () => init())
    window.addEventListener(
      'scroll',
      function () {
        if (!$header.value) return
        if (ckSticky.value) return

        let currentScroll = ref(window.scrollY)
        offset.value = headerHeight.value

        if (currentScroll.value > offset.value) {
          stickAddclass()
        } else {
          stickRemoveClass()
        }

        if (isHideOnScroll.value) {
          const currentScrollPos = ref(window.scrollY)
          if (
            prevScrollpos.value > currentScrollPos.value
            && currentScroll.value > offset.value
          ) {
            $header.value.classList.add('h_scroll_up')
            $header.value.classList.remove('h_scroll_down')
          } else if (currentScroll.value <= offset.value) {
            $header.value.classList.remove('h_scroll_down', 'h_scroll_up')
          } else {
            $header.value.classList.add('h_scroll_down')
            $header.value.classList.remove('h_scroll_up')
          }

          prevScrollpos.value = currentScrollPos.value;
        }
      }
    )
  }

  const stickAddclass = () => {
    if (!$header.value) return
    if (check.value) return

    check.value = true
    $header.value.classList.add('live_stuck')
    $header.value.addEventListener(
      'animationend webkitAnimationEnd oAnimationEnd',
      () => $header.value.classList.add('ani_none')
    )
  }

  const stickRemoveClass = () => {
    if (!$header.value) return
    if (!check.value) return

    check.value = false
    $header.value.classList.add('trs_stuck')
    $header.value.classList.remove('live_stuck', 'h_scroll_down')
    $header.value.classList.remove('ani_none', 'trs_stuck')
  }

  return {
    initStickyMenu,
  }
}

export function useFlickity() {
  const initialize = () => {
    if (!flickity.value) return

    const flickAttr = JSON.parse(flickity.value.ref?.dataset?.flickity || {})
    flickity.value.el = new Flickity(flickity.value.ref, flickAttr)
  }

  return {
    initialize,
  }
}
