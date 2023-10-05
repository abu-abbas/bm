import '@/js/bootstrap.js'
import Vue, { createApp } from 'vue'
import Index from '@/js/modules/admin/Index.vue'
import { configureCompat } from '@/js/compat-config.js'

configureCompat(Vue)
const app = createApp(Index)
app.mount('#app')
