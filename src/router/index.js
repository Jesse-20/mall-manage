import Vue from 'vue'
import VueRouter from 'vue-router'//导入vue-Router
import Home from './../pages/home'
import Login from './../pages/login'



Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component:Login,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        }
    ]
})