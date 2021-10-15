import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueLazyload from 'vue-lazyload'

const Vue = createApp(App)

// createApp(App).use(router).mount('#app')
Vue.use(router).mount('#app')
// Vue.use(VueLazyload)
