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
          v-slot="{ href, navigate, isActive }"
          :to="{ name: 'admin.home' }"
          custom
          active-class="active"
          exact-active-class="active"
        >
          <li :class="{ 'active': isActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <FontAwesomeIcon :icon="['far', 'square']" />
              <span>Dashboard</span>
            </a>
          </li>
        </router-link>

        <li class="menu-header">Pengaturan</li>
        <router-link
          v-slot="{ href, navigate, isActive }"
          :to="{ name: 'settings.tenant' }"
          custom
          active-class="active"
        >
          <li :class="{ 'active': isActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <FontAwesomeIcon :icon="['fas', 'people-group']" />
              <span>Master Tenant</span>
            </a>
          </li>
        </router-link>
        <router-link
          v-slot="{ href, navigate, isActive }"
          :to="{ name: 'settings.product' }"
          custom
          active-class="active"
        >
          <li :class="{ 'active': isActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <FontAwesomeIcon :icon="['fas', 'boxes']" />
              <span>Master Barang</span>
            </a>
          </li>
        </router-link>
        <router-link
          v-slot="{ href, navigate, isActive }"
          :to="{ name: 'settings.user' }"
          custom
          active-class="active"
        >
          <li :class="{ 'active': isActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <FontAwesomeIcon :icon="['fas', 'user']" />
              <span>Master Pengguna</span>
            </a>
          </li>
        </router-link>
        <router-link
          v-slot="{ href, navigate, isActive }"
          :to="{ name: 'settings.event' }"
          custom
          active-class="active"
        >
          <li :class="{ 'active': isActive }">
            <a :href="href" class="nav-link" @click="navigate">
              <FontAwesomeIcon :icon="['fas', 'calendar']" />
              <span>Master Event</span>
            </a>
          </li>
        </router-link>
      </ul>
    </aside>
  </div>
</template>
