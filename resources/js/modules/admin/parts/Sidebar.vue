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
          :to="{ name: 'admin.home' }"
          custom
          v-slot="{ isActive, href, navigate, isExactActive }"
        >
          <li :class="{ 'active': isActive && isExactActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <font-awesome-icon :icon="['far', 'square']" />
              <span>Dashboard</span>
            </a>
          </li>
        </router-link>

        <li class="menu-header">Pengaturan</li>
        <router-link
          :to="{ name: 'settings.tenant' }"
          custom
          v-slot="{ isActive, href, navigate, isExactActive }"
        >
          <li :class="{ 'active': isActive && isExactActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <font-awesome-icon :icon="['fas', 'people-group']" />
              <span>Master Tenant</span>
            </a>
          </li>
        </router-link>
      </ul>
    </aside>
  </div>
</template>
