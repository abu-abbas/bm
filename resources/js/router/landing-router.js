import { _settings } from '@/js/utils/common'
import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(_settings.prefix),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '',
      name: 'landing.home',
      components: {
        default: () => import('@/js/modules/new-landing/home/Index.vue'),
      },
      meta: {
        auth: false,
        access: true,
      },
    },
    {
      path: '/transaction',
      name: 'landing.transaction',
      components: {
        default: () => import('@/js/modules/landing/transactions/Index.vue'),
      },
      meta: {
        auth: true,
        access: true,
      },
    },
    {
      path: '/t/:slug',
      name: 'tenant.home',
      props: true,
      components: {
        default: () => import('@/js/modules/new-landing/tenant/Index.vue'),
      },
      meta: {
        auth: false,
        access: true,
      },
    },
    {
      path: '/t/:tenantSlug/p/:productSlug',
      name: 'tenant.product',
      props: true,
      components: {
        default: () => import('@/js/modules/new-landing/product/Index.vue'),
      },
      meta: {
        auth: false,
        access: true,
      },
    },
    {
      path: '/:pathName(.*)',
      name: 'landing.forbidden',
      component: () => import('@/js/modules/errors/404.vue'),
      meta: {
        auth: false,
        access: true,
      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  // cek apakah membutuhkan login
  if (to.meta.auth && !_settings.user) window.location = '/'

  // cek hak akses
  if (!to.meta.access) {
    next({ name: 'landing.forbidden' })
    return
  }

  next()
})

export default router
