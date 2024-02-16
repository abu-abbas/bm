import path from 'path'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import postcssNesting from 'postcss-nesting'
import eslintPlugin from 'vite-plugin-eslint'
import { defineConfig, normalizePath } from 'vite'

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
      '@modules': `${normalizePath(path.resolve(__dirname, 'resources/js/modules/'))}`,
      '@components': `${normalizePath(path.resolve(__dirname, 'resources/js/components/'))}`,
    },
  },
  build: {
    chunkSizeWarningLimit: 1024,
  },
})
