// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: router,
  render: h => h(App)
})
