export default function productRoutes({ header, footer }) {
  return [
    {
      path: '/settings/product',
      components: {
        default: () => import('@/js/modules/settings/product/Main.vue'),
        header,
        footer
      },
      children: [
        {
          path: '',
          name: 'settings.product',
          component: () => import('@/js/modules/settings/product/Index.vue'),
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
                label: 'Daftar Barang',
                url: null,
                isActive: false
              },
            ]
          },
        },
        {
          path: ':slug',
          name: 'settings.product.detail',
          props: true,
          component: () => import('@/js/modules/settings/product/Detail.vue'),
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
                label: 'Daftar Barang',
                url: 'settings.product',
                isActive: true
              },
              {
                label: 'Info Barang',
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
