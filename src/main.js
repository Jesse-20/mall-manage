import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"
import router from "./router"
import ElementUI from 'element-ui'
import App from './App.vue'

Vue.use(VueAxios, axios)

Vue.use(ElementUI)

axios.defaults.baseURL = "https://www.fastmock.site/mock/ac80b8f210e6bd9c533e737446af8be5/api";
axios.defaults.timeout = 8000;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
