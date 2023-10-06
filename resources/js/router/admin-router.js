import { _settings } from '@/js/utils/common'
import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory('admin'),
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
      component: () => import('@/js/modules/admin/Index.vue'),
      meta: {
        auth: true,
        access: true,
      },
      children: [
        {
          path: '',
          name: 'admin.home',
          component: () => import('@/js/modules/dashboard/Admin.vue'),
          meta: {
            auth: true,
            access: true,
          },
        },
        {
          path: 'settings/tenant',
          name: 'settings.tenant',
          component: () => import('@/js/modules/settings/tenant/Index.vue'),
          meta: {
            auth: true,
            access: true,
          },
        }
      ]
    },
    {
      path: '/404',
      name: 'admin.forbidden',
      component: () => import('@/js/modules/errors/404.vue'),
      meta: {
        auth: true,
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
    next({ name: 'admin.forbidden' })
    return
  }

  next()
})

export default router
