import { _settings } from '@/js/utils/common'
import { createWebHistory, createRouter } from 'vue-router'

const Header = () => import('@/js/modules/admin/parts/Header.vue')
const Footer = () => import('@/js/modules/admin/parts/Footer.vue')

// routes
import tenantRouter from '@/js/router/modules/tenant-router'
import productRouter from '@/js/router/modules/product-router'
import userRouter from '@/js/router/modules/user-router'

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
      name: 'admin.home',
      components: {
        default: () => import('@/js/modules/dashboard/Admin.vue'),
        header: Header,
        footer: Footer
      },
      meta: {
        auth: true,
        access: true,
      },
    },
    ...tenantRouter({ header: Header, footer: Footer }),
    ...productRouter({
      header: Header,
      footer: Footer
    }),
    ...userRouter({
      header: Header,
      footer: Footer
    }),
    {
      path: '/404',
      name: 'admin.forbidden',
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
    next({ name: 'admin.forbidden' })
    return
  }

  next()
})

export default router
