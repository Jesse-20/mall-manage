import Vue from 'vue'
import VueRouter from 'vue-router'//导入vue-Router
import Manage from './../pages/manage'
import Login from './../pages/login'
import Home from './../pages/home'
import addGoods from './../pages/addGoods'
import userList from './../pages/userList'
import goodList from './../pages/goodList'
import orderList from './../pages/orderList'
import adminList from './../pages/adminList'
import visitor from './../pages/visitor'
import textEdit from './../pages/textEdit'
import adminSet from './../pages/adminSet'
import explain from './../pages/explain'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component:Login,
        },
        {
            path: '/manage',
            name: 'manage',
            redirect:'/',
            component: Manage,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home, 
                    meta:['首页'],
                },
                {
                    path: '/addGoods',
                    name: 'addGoods',
                    component: addGoods, 
                    meta:['添加数据','添加商品'],
                },
                {
                    path: '/userList',
                    name: 'userList',
                    component: userList, 
                    meta:['数据管理','用户列表'],
                },
                {
                    path: '/goodList',
                    name: 'goodList',
                    component: goodList, 
                    meta:['数据管理','商品列表'],
                },
                {
                    path: '/orderList',
                    name: 'orderList',
                    component: orderList, 
                    meta:['数据管理','订单列表'],
                },
                {
                    path: '/adminList',
                    name: 'adminList',
                    component: adminList, 
                    meta:['数据管理','管理员列表'],
                },
                {
                    path: '/visitor',
                    name: 'visitor',
                    component: visitor, 
                    meta:['图表','用户分布'],
                },
                {
                    path: '/textEdit',
                    name: 'textEdit',
                    component: textEdit, 
                    meta:['编辑','文本编辑'],
                },
                {
                    path: '/adminSet',
                    name: 'adminSet',
                    component: adminSet, 
                    meta:['设置','管理员设置'],
                },
                {
                    path: '/explain',
                    name: 'explain',
                    component: explain, 
                    meta:['说明','说明'],
                },
            ]
        }, 
    ]
})