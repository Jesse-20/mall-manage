import Vue from 'vue'
import VueRouter from 'vue-router'//导入vue-Router
import Home from './../pages/home'



Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
        path: '/',
        name: 'home',
        component: Home,
        }
    ]
})