import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
