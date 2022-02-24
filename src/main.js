import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"
import router from "./router"
import ElementUI from 'element-ui'
import App from './App.vue'

//mock开关
const mock = true;
if (mock) {
  require('./mock/index');
}

//使用axios和vue-axios
Vue.use(VueAxios, axios)

//使用elementUI
Vue.use(ElementUI)

//配置axios
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
//配置axios响应拦截器
axios.interceptors.response.use(response=> {
  return response.data;
}, err => {
  return Promise.reject(err)
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
