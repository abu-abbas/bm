<script setup>
import { _settings } from '@/js/utils/common'
</script>

<template>
  <div class="main-sidebar sidebar-style-2">
    <aside class="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="/">{{ _settings.appname }}</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="/">BM</a>
      </div>
      <ul class="sidebar-menu">
        <router-link
          v-slot="{ isActive, href, navigate, isExactActive }"
          :to="{ name: 'admin.home' }"
          custom
        >
          <li :class="{ 'active': isActive && isExactActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <FontAwesomeIcon :icon="['far', 'square']" />
              <span>Dashboard</span>
            </a>
          </li>
        </router-link>

        <li class="menu-header">Pengaturan</li>
        <router-link
          v-slot="{ isActive, href, navigate, isExactActive }"
          :to="{ name: 'settings.tenant' }"
          custom
        >
          <li :class="{ 'active': isActive && isExactActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <FontAwesomeIcon :icon="['fas', 'people-group']" />
              <span>Master Tenant</span>
            </a>
          </li>
        </router-link>
      </ul>
    </aside>
  </div>
</template>
