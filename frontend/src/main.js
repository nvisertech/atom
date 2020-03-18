import Vue from 'vue'
import store from '@/store'
import router from '@/router'


import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'




import VueRaven from 'vue-raven'

import App from '@/App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false


// Sentry for logging frontend errors
Vue.use(VueRaven, {
  dsn: process.env.VUE_APP_SENTRY_PUBLIC_DSN,
  disableReport: process.env.NODE_ENV === 'development'
})






new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
