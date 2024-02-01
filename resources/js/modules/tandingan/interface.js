import $ from 'jquery'
import { ref } from 'vue'


export function useInterface() {
  const ckSticky = ref(true)
  const body = window.body

  let $header = $('#ntheader'),
    // check = false,
    // prevScrollpos = window.pageYOffset,
    // isHideOnScroll = body.hasClass('hide_scrolld_true'),
    headerHeight = $header.outerHeight()
    // offset = headerHeight,
    // txt_header_banner = '#kalles-section-header_banner'

  const init = () => {
    ckSticky.value = true
    $header.removeClass('sticky_prepared').css('height', '')
    if (headerHeight < $header.outerHeight()) {
      headerHeight = $header.outerHeight()
    }

    if (body.hasClass('des_header_7') && $(window).width() > 1024) return

    ckSticky.value = false
    $header.addClass('sticky_prepared').css({ height: headerHeight })
  }

  return {
    init
  }
}
