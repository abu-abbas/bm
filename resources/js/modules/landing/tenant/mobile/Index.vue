<script setup>
import { _settings } from '@/js/utils/common.js'
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
  needSticky.value.classList[method]('sticky-top')
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
          <a class="d-flex justify-content-center align-items-center text__header fs-icon-size">
            <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
          </a>
          <a class="d-flex justify-content-center align-items-center text__header fs-icon-size">
            <FontAwesomeIcon :icon="['fas', 'arrow-right-to-bracket']" />
          </a>
        </div>
      </header>
      <div class="spacing-wrapper"></div>
      <div class="user-information">
        <div class="info__wrapper">
          <div class="d-flex w-100 align-items-center m-2">
            Anda belum login.
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
            <div v-for="idx in 9" :key="idx" class="col-6">
              <div class="product-wrapper">
                <div
                  class="card border shadow-sm rounded-lg"
                  @click="onHandleSelectedProduct('testing-product')"
                >
                  <img :src="data?.logo?.original" alt="">
                  <div class="card-body p-2 d-flex flex-column">
                    <div class="product-description fs-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio optio dolor recusandae commodi quos! Voluptates molestiae id amet consequatur dolores cupiditate ex omnis deleniti sit iusto! Architecto, eligendi perspiciatis?
                    </div>
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
