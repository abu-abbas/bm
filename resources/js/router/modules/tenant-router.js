export default function tenantRoutes({ header, footer }) {
  return [
    {
      path: '/settings/tenant',
      components: {
        default: () => import('@/js/modules/settings/tenant/Main.vue'),
        header,
        footer
      },
      children: [
        {
          path: '',
          name: 'settings.tenant',
          component: () => import('@/js/modules/settings/tenant/Index.vue'),
          meta: {
            auth: true,
            access: true,
            breadcrumbs: [
              {
                label: 'Dashboard',
                url: 'admin.home',
                isActive: true
              },
              {
                label: 'Master Tenant',
                url: null,
                isActive: false
              },
            ]
          },
        },
        {
          path: ':slug',
          name: 'settings.tenant.detail',
          props: true,
          component: () => import('@/js/modules/settings/tenant/Detail.vue'),
          meta: {
            auth: true,
            access: true,
            breadcrumbs: [
              {
                label: 'Dashboard',
                url: 'admin.home',
                isActive: true
              },
              {
                label: 'Master Tenant',
                url: 'settings.tenant',
                isActive: true
              },
              {
                label: 'Detail Tenant',
                url: null,
                isActive: false
              },
            ]
          },
        },
      ],
      meta: {
        auth: true,
        access: true,
      },
    }
  ]
}
