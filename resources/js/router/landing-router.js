import { _settings } from '@/js/utils/common'
import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
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
        default: () => import('@/js/modules/landing/parts/Home.vue'),
      },
      meta: {
        auth: false,
        access: true,
      },
    },
    {
      path: '/404',
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