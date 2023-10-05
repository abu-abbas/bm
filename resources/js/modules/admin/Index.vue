<script setup>
import $ from 'jquery'
import { onMounted } from 'vue'
import 'bootstrap/dist/js/bootstrap.min.js'
import { _settings } from '@/js/utils/common'

const sidebarSticky = () => {
  if ($('body').hasClass('layout-2')) {
    $('body.layout-2 #sidebar-wrapper').stick_in_parent({ parent: $('body') })
    $('body.layout-2 #sidebar-wrapper').stick_in_parent({ recalc_every: 1 })
  }
}

onMounted(() => {
  sidebarSticky()

  $('.main-content').css({ minHeight: $(window).outerHeight() - 95 })
})
</script>

<template>
  <div class="main-wrapper main-wrapper-1">
    <div class="navbar-bg"></div>
    <nav class="navbar navbar-expand-lg main-navbar">
      <form class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
          <li>
            <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><font-awesome-icon :icon="['fas', 'bars']" /></a>
          </li>
        </ul>
      </form>
      <ul class="navbar-bar navbar-right">
        <li class="dropdown">
          <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
            <img alt="image" src="@theme/stisla/assets/img/avatar/avatar-1.png" class="rounded-circle mr-1">
            <div class="d-sm-none d-lg-inline-block">Hi, {{ _settings.user.name }}</div>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-title">Logged in 5 min ago</div>
            <a href="javascript:void(0)" class="dropdown-item has-icon">
              <i class="far fa-user"></i> Profile
            </a>
            <a href="javascript:void(0)" class="dropdown-item has-icon">
              <i class="fas fa-bolt"></i> Activities
            </a>
            <a href="javascript:void(0)" class="dropdown-item has-icon">
              <i class="fas fa-cog"></i> Settings
            </a>
            <div class="dropdown-divider"></div>
            <a
              class="dropdown-item has-icon text-danger"
              href="javascript:void(0)"
              onclick="doLogout.apply(this, arguments)"
            >
              <i class="fas fa-sign-out-alt"></i> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>

    <div class="main-sidebar sidebar-style-2">
      <aside class="sidebar-wrapper">
        <div class="sidebar-brand">
          <a href="/">{{ _settings.appname }}</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
          <a href="/">BM</a>
        </div>
        <ul class="sidebar-menu">
          <li class="menu-header">Starter</li>
          <li class=active>
            <a class="nav-link" href="#">
              <font-awesome-icon :icon="['far', 'square']" />
              <span>Blank Page</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>

    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Blank Page</h1>
        </div>

        <div class="section-body">
          content strats from here
        </div>
      </section>
    </div>

    <footer class="main-footer">
      <div class="footer-left">
        Copyright &copy; 2023 <div class="bullet"></div> Design By <a href="#">Momoy Sumomoy</a>
      </div>
      <div class="footer-right">

      </div>
    </footer>
  </div>
</template>

<style lang="scss">
nav {
  &.navbar {
    ul {
      &.navbar-nav {
        li {
          a {
            &.nav-link {
              i, svg {
                margin-left: 0 !important;
                font-size: 18px;
                line-height: 32px;
              }
            }
          }
        }
      }
    }
  }
}

.main-sidebar {
  .sidebar-menu {
    li {
      a {
        i, svg {
          width: 28px;
          margin-right: 20px;
          text-align: center;
        }
      }
    }
  }
}

.main-content {
  .section {
    &.section {
      .section-header {
        h1 {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
