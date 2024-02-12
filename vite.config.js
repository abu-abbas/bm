import path from 'path'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import postcssNesting from 'postcss-nesting'
import eslintPlugin from 'vite-plugin-eslint'
import { defineConfig, normalizePath } from 'vite'
// import { toKebab } from './resources/js/utils/convert-case.js'

// const destination = 'assets/compiled'

export default defineConfig({
  css: {
    // for ignore Deprecation Warning: Passing percentage units to the global abs() function is deprecated.
    // see: https://github.com/twbs/bootstrap/issues/39028#issuecomment-1693189126
    // or https://github.com/twbs/bootstrap/issues/39028#issuecomment-1697758268
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    },
    postcss: {
      plugins: [
        postcssNesting
      ]
    }
  },
  plugins: [
    eslintPlugin(),
    laravel({
      input: [
        // styles
        'resources/sass/app.scss',
        'resources/sass/landing.app.scss',

        // scripts
        'resources/js/app/landing.js',
        'resources/js/app/admin.js',
        'resources/js/app/auth.js',
      ],
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: '',
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': `${normalizePath(path.resolve(__dirname, 'resources/'))}/`,
      // 'vue': 'vue/dist/vue.esm-bundler.js', v3
      'jQuery': 'jquery/dist/jquery.min.js',
      'vue': '@vue/compat', // vue2 -> vue3
      'vue-slimscroll': 'vue-slimscroll',
      'vue-esm': 'vue/dist/vue.esm-bundler.js',
      'vue-tippy': 'vue-tippy/dist/vue-tippy.esm.js',
      'buffer': 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      '@theme': `${normalizePath(path.resolve(__dirname, 'theme/'))}`,
    },
  },
  build: {
    chunkSizeWarningLimit: 1024,
    // rollupOptions: {
    //   output: {
    //     entryFileNames: `${destination}/js/modules/app/[name]-[hash].js`,
    //     chunkFileNames: ({ isDynamicEntry, name, facadeModuleId, moduleIds, type }) => {
    //       if (isDynamicEntry) {
    //         const prefix = `${facadeModuleId}`.split('/')
    //         return `${destination}/js/modules/${type}/${prefix[prefix.length - 2]}/${toKebab(name)}-[hash].js`
    //       }

    //       const isVendor = moduleIds.some((id) => id.includes('node_modules'))
    //       return `${destination}/js/${isVendor ? 'vendor' : 'modules/resource'}/[name]-[hash].js`
    //     },
    //     assetFileNames: (assetInfo) => {
    //       const extname = assetInfo.name.split('.')[1]
    //       let folder = extname ? `${extname}/` : ''

    //       // Put fonts into fonts folder
    //       if (['woff', 'woff2', 'ttf', 'eot'].includes(extname)) folder = 'fonts/'

    //       // put images into images folder
    //       if (['png', 'jpg', 'jpeg', 'svg', 'webp'].includes(extname)) folder = 'images/'

    //       return `${destination}/${folder}[name]-[hash][extname]`
    //     },
    //     manualChunks: {
    //       'bootstrap-utils': ['bootstrap'],
    //       'bootstrap-vue-utils': ['bootstrap-vue'],
    //       'jquery-utils': ['@popperjs/core', 'popper.js', 'jquery'],
    //       'common-utils': ['axios', 'moment', 'lodash', 'sweetalert2', 'ziggy-js', 'hashids', 'maska', 'tippy.js', 'ismobilejs'],
    //       'images-utils': ['cropperjs', 'compressorjs'],
    //       'vue-utils': ['vue', 'vue-router', 'pinia', '@vue/compat'],
    //       'vue-plugins-utils': ['@vee-validate/i18n', '@vee-validate/rules', '@vee-validate/yup', 'vee-validate', 'vue-multiselect', 'vue-slimscroll', 'vue-tippy', 'vue-cropperjs'],
    //     },
    //   },
    // },
  },
})
