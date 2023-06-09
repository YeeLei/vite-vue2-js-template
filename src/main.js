import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'

import 'normalize.css'
import '@/styles/index.scss'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
