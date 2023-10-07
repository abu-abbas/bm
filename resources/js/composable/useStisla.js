import 'bootstrap/dist/js/bootstrap.min.js'

import $ from 'jquery'
import { ref } from 'vue'

let now_layout_class = null
const windowOuterWidth = ref(0)

const sidebarSticky = () => {
  if ($('body').hasClass('layout-2')) {
    $('body.layout-2 #sidebar-wrapper').stick_in_parent({ parent: $('body') })
    $('body.layout-2 #sidebar-wrapper').stick_in_parent({ recalc_every: 1 })
  }
}

const resizeHandler = () => {
  windowOuterWidth.value = document.body.clientWidth
  $('.main-content').css({ minHeight: $(window).outerHeight() - 95 })
  toggleLayout()
}

const toggleLayout = () => {
  const layout_class = $('body').attr('class') || ''
  const layout_classes = (layout_class.trim().length > 0 ? layout_class.split(' ') : '')

  if (layout_classes.length > 0) {
    layout_classes.forEach(function (item) {
      if (item.indexOf('layout-') != -1) {
        now_layout_class = item
      }
    })
  }

  if (windowOuterWidth.value <= 1024) {
    if ($('body').hasClass('sidebar-mini')) {
      toggle_sidebar_mini(false)
      // $('.main-sidebar').niceScroll(sidebar_nicescroll_opts);
      // sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
    }

    $('body').addClass('sidebar-gone')
    $('body').removeClass('layout-2 layout-3 sidebar-mini sidebar-show')
    $('body').off('click').on('click', function (e) {
      // if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
      if ($(e.target).hasClass('sidebar-show')) {
        $('body').removeClass('sidebar-show')
        $('body').addClass('sidebar-gone')
        // $('body').removeClass('search-show')
        // update_sidebar_nicescroll();
      }
    });

    // update_sidebar_nicescroll();

    if (now_layout_class == 'layout-3') {
      const nav_second_classes = $(".navbar-secondary").attr('class')
      const nav_second = $(".navbar-secondary")

      nav_second.attr('data-nav-classes', nav_second_classes)
      nav_second.removeAttr('class')
      nav_second.addClass('main-sidebar')

      const main_sidebar = $('.main-sidebar')
      main_sidebar.find('.container').addClass('sidebar-wrapper').removeClass('container')
      main_sidebar.find('.navbar-nav').addClass('sidebar-menu').removeClass('navbar-nav')
      main_sidebar.find('.sidebar-menu .nav-item.dropdown.show a').click()
      main_sidebar.find('.sidebar-brand').remove()
      main_sidebar
        .find('.sidebar-menu')
        .before($('<div>', { class: 'sidebar-brand' })
          .append($('<a>', { href: $('.navbar-brand').attr('href') })
            .html($('.navbar-brand')
              .html()
            )
          ))

      // setTimeout(function () {
      //   sidebar_nicescroll = main_sidebar.niceScroll(sidebar_nicescroll_opts);
      //   sidebar_nicescroll = main_sidebar.getNiceScroll();
      // }, 700);

      sidebar_dropdown()
      $('.main-wrapper').removeClass('container')
    }
  } else {
    $('body').removeClass('sidebar-gone sidebar-show')
    if (now_layout_class) $('body').addClass(now_layout_class)

    const nav_second_classes = $('.main-sidebar').attr('data-nav-classes')
    const nav_second = $('.main-sidebar')

    if (now_layout_class == 'layout-3' && nav_second.hasClass('main-sidebar')) {
      nav_second.find('.sidebar-menu li a.has-dropdown').off('click')
      nav_second.find('.sidebar-brand').remove()
      nav_second.removeAttr('class')
      nav_second.addClass(nav_second_classes)

      const main_sidebar = $('.navbar-secondary')
      main_sidebar.find('.sidebar-wrapper').addClass('container').removeClass('sidebar-wrapper')
      main_sidebar.find('.sidebar-menu').addClass('navbar-nav').removeClass('sidebar-menu')
      main_sidebar.find('.dropdown-menu').hide()
      main_sidebar.removeAttr('style')
      main_sidebar.removeAttr('tabindex')
      main_sidebar.removeAttr('data-nav-classes')
      $('.main-wrapper').addClass("container")
      // if(sidebar_nicescroll != null)
      //   sidebar_nicescroll.remove();
    } else if (now_layout_class == 'layout-2') {
      $('body').addClass('layout-2')
    } else {
      // update_sidebar_nicescroll();
    }
  }
}

const sidebar_dropdown = function () {
  if ($('.main-sidebar').length) {
    // $('.main-sidebar').niceScroll(sidebar_nicescroll_opts);
    // sidebar_nicescroll = $('.main-sidebar').getNiceScroll();

    $('.main-sidebar .sidebar-menu li a.has-dropdown').off('click').on('click', function () {
      var me = $(this)

      me.parent().find('> .dropdown-menu').slideToggle(500, function () {
        // update_sidebar_nicescroll();
        return false
      })

      return false
    })
  }
}

const toggle_sidebar_mini = (mini) => {
  const body = document.body

  if (!mini) {
    body.classList.remove('sidebar-mini')
    $('.main-sidebar').css({ overflow: 'hidden' })
    // setTimeout(function () {
    //   $('.main-sidebar').niceScroll(sidebar_nicescroll_opts)
    //   sidebar_nicescroll = $('.main-sidebar').getNiceScroll()
    // }, 500)
    $('.main-sidebar .sidebar-menu > li > ul .dropdown-title').remove()
    $('.main-sidebar .sidebar-menu > li > a').removeAttr('data-toggle')
    $('.main-sidebar .sidebar-menu > li > a').removeAttr('data-original-title')
    $('.main-sidebar .sidebar-menu > li > a').removeAttr('title')
  } else {
    body.classList.add('sidebar-mini')
    body.classList.remove('sidebar-show')
    // sidebar_nicescroll.remove()
    // sidebar_nicescroll = null
    $('.main-sidebar .sidebar-menu > li').each(function () {
      let me = $(this)

      if (me.find('> .dropdown-menu').length) {
        me.find('> .dropdown-menu').hide()
        me.find('> .dropdown-menu').prepend('<li class="dropdown-title pt-3">' + me.find('> a').text() + '</li>')
      } else {
        me.find('> a').attr('data-toggle', 'tooltip')
        me.find('> a').attr('data-original-title', me.find('> a').text())
        $('[data-toggle="tooltip"]').tooltip({ placement: 'right' })
      }
    })
  }
}

const onHandleSidebarToggle = () => {
  const body = document.body

  if (windowOuterWidth.value <= 1024) {
    if (body.classList.contains('sidebar-gone')) {
      body.classList.remove('sidebar-gone')
      body.classList.add('sidebar-show')
    } else {
      body.classList.add('sidebar-gone')
      body.classList.remove('sidebar-show')
    }

    // update_sidebar_nicescroll();
  } else {
    toggle_sidebar_mini(!body.classList.contains('sidebar-mini'))
  }
}

export function useStisla() {
  return { sidebarSticky, resizeHandler, onHandleSidebarToggle }
}
