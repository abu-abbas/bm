import { ref } from 'vue'

const $header = ref(null)
const $mask = ref(null)
const mobileNav = ref({
  open: null,
  close: null,
  menu: null
})

const useKallesInterface = () => {
  const body = document.body
  const html = document.documentElement
  const window_w = window.innerWidth

  const check = ref(false)
  const ckSticky = ref(true)
  const headerHeight = ref(0)

  const addClassesToBody = () => {
    const currentClass = Array.from(body.classList)
    if (currentClass.length) {
      body.classList.remove(...currentClass)
    }

    const newClass = [
      'lazy_icons',
      'btnt4_style_2',
      'zoom_tp_2',
      'css_scrollbar',
      'template-index',
      'js_search_true',
      'cart_pos_side',
      'kalles_toolbar_true',
      'hover_img2',
      'swatch_style_rounded',
      'swatch_list_size_small',
      'label_style_rounded',
      'wrapper_full_width',
      'header_sticky_true',
      'hide_scrolld_true',
      'des_header_3',
      'h_banner_true',
      'top_bar_true',
      'prs_bordered_grid_1',
      'search_pos_canvas',
      'js_search_type',
      'lazyloaded',
      'kalles-ready',
      'h_calc_ready',
    ]

    body.classList.add(...newClass)
  }

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
    let prevScrollpos = window.scrollY
    let offset = headerHeight.value

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

        let currentScroll = window.scrollY
        offset = headerHeight.value

        if (currentScroll > offset) {
          stickAddclass()
        } else {
          stickRemoveClass()
        }

        if (isHideOnScroll.value) {
          let currentScrollPos = window.scrollY

          if (
            prevScrollpos > currentScrollPos
            && currentScroll > offset
          ) {
            $header.value.classList.add('h_scroll_up')
            $header.value.classList.remove('h_scroll_down')
          } else if (currentScroll <= offset) {
            $header.value.classList.remove('h_scroll_down', 'h_scroll_up')
          } else {
            $header.value.classList.add('h_scroll_down')
            $header.value.classList.remove('h_scroll_up')
          }

          prevScrollpos = currentScrollPos
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

  const sideMenu = (open = true) => {
    if (!mobileNav.value.menu) return
    if (!mobileNav.value.open) return

    const method = open ? 'add' : 'remove'

    mobileNav.value.open?.classList[method]('act_current')
    html?.classList[method]('hside_opened')
    body?.classList[method]('pside_opened')
    mobileNav.value.menu?.classList[method]('act_opened')
    $mask.value?.classList[method]('mask_opened')
  }

  return {
    initStickyMenu,
    addClassesToBody,
    sideMenu,
  }
}

export {
  $mask,
  $header,
  mobileNav,
  useKallesInterface,
}
