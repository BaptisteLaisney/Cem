import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueGtag from 'vue-gtag'

const app = createApp(App)
app.use(router)
app.use(VueGtag, {
  config: { id: 'G-LWZRDN8CJM' }
}, router)
app.provide('gtag', app.config.globalProperties.$gtag)
app.mount('#app')
