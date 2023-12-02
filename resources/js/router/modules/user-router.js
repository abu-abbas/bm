export default function userRoutes({ header, footer }) {
  return [
    {
      path: '/settings/user',
      components: {
        default: () => import('@/js/modules/settings/user/Main.vue'),
        header,
        footer
      },
      children: [
        {
          path: '',
          name: 'settings.user',
          component: () => import('@/js/modules/settings/user/Index.vue'),
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
                label: 'Daftar Users',
                url: null,
                isActive: false
              },
            ]
          },
        },
        {
          path: ':slug',
          name: 'settings.user.detail',
          props: true,
          component: () => import('@/js/modules/settings/user/Detail.vue'),
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
                label: 'Daftar Users',
                url: 'settings.user',
                isActive: true
              },
              {
                label: 'Info Users',
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
