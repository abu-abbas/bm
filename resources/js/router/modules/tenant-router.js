const tenantRoutes = [
  {
    path: 'settings/tenant',
    name: 'settings.tenant',
    component: () => import('@/js/modules/settings/tenant/Index.vue'),
    meta: {
      auth: true,
      access: true,
    },
  },
  {
    path: 'settings/tenant/:slug',
    name: 'settings.tenant.detail',
    props: true,
    component: () => import('@/js/modules/settings/tenant/Detail.vue'),
    meta: {
      auth: true,
      access: true,
    },
  },
]

export default tenantRoutes
