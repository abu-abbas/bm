<script setup>
import { _settings } from '@/js/utils/common'
import { useStisla } from '@/js/composable/useStisla'

const { onHandleSidebarToggle } = useStisla()
</script>

<template>
  <div class="navbar-bg"></div>
  <nav class="navbar navbar-expand-lg main-navbar">
    <form class="form-inline mr-auto">
      <ul class="navbar-nav mr-3">
        <li>
          <a
            href="#"
            data-toggle="sidebar"
            class="nav-link nav-link-lg"
            @click="onHandleSidebarToggle"
          >
            <FontAwesomeIcon :icon="['fas', 'bars']" />
          </a>
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
          <a href="/" class="dropdown-item has-icon">
            <FontAwesomeIcon :icon="['fas', 'house']" class="mr-2" />Beranda
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item has-icon text-danger"
            href="javascript:void(0)"
            onclick="doLogout.apply(this, arguments)"
          >
            <FontAwesomeIcon :icon="['fas', 'sign-out-alt']" class="mr-2" />Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>
