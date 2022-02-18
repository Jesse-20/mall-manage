import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"
import router from "./router"
import ElementUI from 'element-ui'
import App from './App.vue'

Vue.use(VueAxios, axios)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
