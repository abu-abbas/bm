<script setup>
import { _settings, _redirectToLogin } from '@/js/utils/common.js'
import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { useTenant } from '@/js/modules/landing/tenant/tenant.js'

import NotFound from '@/js/modules/errors/404.vue'

const props = defineProps({
  slug: {
    type: [String, null],
    required: true,
    default: null
  },
})

const localSlug = computed(() => props.slug)
const { data, found, onHandleSelectedProduct } = useTenant(localSlug.value)
const needSticky = ref(null)

const onHandleScroll = () => {
  const method = window.scrollY > 200 ? 'add' : 'remove'
  needSticky.value?.classList[method]('sticky-top')
}

const onHandleCartShoppingClick = () => {
  if (!_settings.user) {
    _redirectToLogin()
    return
  }

  // baru redirect ke cart-shopping
}

onMounted(() => document.addEventListener('scroll', onHandleScroll))
onBeforeMount(() => document.removeEventListener('scroll', onHandleScroll))
</script>

<template>
  <div class="root-wrapper tenant-page-for-mobile-wrapper">
    <div class="page-wrapper">
      <header class="fixed-header">
        <div class="button-wrapper">
          <div class="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
          </div>
        </div>
        <div class="align-self-center">
          <div class="searchbar">
            <div class="searchbar__icon">
              <FontAwesomeIcon :icon="['fas', 'search']" />
            </div>
            <input
              type="search"
              class="searchbar__input"
              :placeholder="`Cari di ${ found ? data?.name : _settings.appname }`">
          </div>
        </div>
        <div class="header-action-wrapper">
          <a
            class="d-flex justify-content-center align-items-center text__header fs-icon-size"
            @click="onHandleCartShoppingClick"
          >
            <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
          </a>
          <template v-if="!_settings.user">
            <a
              class="d-flex justify-content-center align-items-center text__header fs-icon-size"
              @click="_redirectToLogin"
            >
              <FontAwesomeIcon :icon="['fas', 'arrow-right-to-bracket']" />
            </a>
          </template>
          <template v-else>
            <a
              class="d-flex justify-content-center align-items-center text__header fs-icon-size"
              href="javascript:void(0)"
              onclick="doLogout.apply(this, arguments)"
            >
              <FontAwesomeIcon :icon="['fas', 'arrow-right-from-bracket']" />
            </a>
          </template>

        </div>
      </header>
      <div class="spacing-wrapper"></div>
      <div class="user-information">
        <div class="info__wrapper">
          <div class="d-flex w-100 align-items-center m-2">
            <span v-if="!_settings.user">Anda belum login.</span>
            <span v-else>Halo, {{ _settings.user.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <template v-if="found">
        <div ref="needSticky" class="tenant-information-wrapper">
          <div class="shop-logo d-block">
            <div class="intrinsic w-100 h-100">
              <img :src="data?.logo?.thumb" :alt="data?.name" class="tenant-logo">
            </div>
          </div>
          <div class="shop-name">
            <div class="badge-text">
              <div class="ml-2 text-content">
                {{ data?.name }}
              </div>
            </div>
            <div class="shop-location-wrapper">
              <div class="ml-2 text-content">
                {{ data?.short_location }}
              </div>
            </div>
          </div>
        </div>

        <div class="content-product px-3 mt-4">
          <div class="row no-gutters">
            <div v-for="(product, idx) in data?.products" :key="idx" class="col-6">
              <div class="product-wrapper">
                <div
                  class="card border shadow-sm rounded-lg"
                  @click="onHandleSelectedProduct(product.slug)"
                >
                  <img :src="product?.images[0]" :alt="product.product_name">
                  <div class="card-body p-2 d-flex flex-column">
                    <div class="product-description fs-sm">{{ product?.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <NotFound v-else class="px-3" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/js/modules/landing/mobile-view.scss';
</style>
