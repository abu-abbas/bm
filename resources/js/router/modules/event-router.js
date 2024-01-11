export default function eventRoutes({ header, footer }) {
  return [
    {
      path: '/settings/event',
      components: {
        default: () => import('@/js/modules/settings/event/Main.vue'),
        header,
        footer
      },
      children: [
        {
          path: '',
          name: 'settings.event',
          component: () => import('@/js/modules/settings/event/Index.vue'),
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
                label: 'Daftar Event',
                url: null,
                isActive: false
              },
            ]
          },
        },
        {
          path: ':slug',
          name: 'settings.event.detail',
          props: true,
          component: () => import('@/js/modules/settings/event/Detail.vue'),
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
                label: 'Daftar Event',
                url: 'settings.event',
                isActive: true
              },
              {
                label: 'Info Event',
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
