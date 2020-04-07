import Vue from 'vue'
import Router from 'vue-router'
import browser from '../utils/browser'

Vue.use(Router)

let isMobile = browser.isMobile
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: resolve => { isMobile ? require(['../page/Wap/Index'], resolve) : require(['../page/Wap/Index'], resolve) },
            // component: resolve => { isMobile ? require(['../page/Wap/Index'], resolve) : require(['../page/Index'], resolve) },
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: resolve => { isMobile ? require(['../page/Wap/Home'], resolve) : require(['../page/Wap/Home'], resolve) }
                    // component: resolve => { isMobile ? require(['../page/Wap/Home'], resolve) : require(['../page/home'], resolve) }
                },
                {
                    path: '/user',
                    name: 'User',
                    component: resolve => require(['../page/Wap/User'], resolve)
                },
                {
                    path: '/user/login',
                    name: 'login',
                    component: resolve => require(['../page/Wap/User/login'], resolve)
                },
                {
                    path: '/user/register',
                    name: 'register',
                    component: resolve => require(['../page/Wap/User/register'], resolve)
                },
                {
                    path: '/user/changePassword',
                    name: 'changePassword',
                    component: resolve => require(['../page/Wap/User/changePassword'], resolve)
                },
                {
                    path: '/user/forgetPassword',
                    name: 'forgetPassword',
                    component: resolve => require(['../page/Wap/User/forgetPassword'], resolve)
                },
                {
                    path: '/user/banding',
                    name: 'binding',
                    component: resolve => require(['../page/Wap/User/banding'], resolve)
                },
                {
                    path: '/user/changeBanding',
                    name: 'changeBanding',
                    component: resolve => require(['../page/Wap/User/changeBanding'], resolve)
                },
                {
                    path: '/user/untyingBanding',
                    name: 'untyingBanding',
                    component: resolve => require(['../page/Wap/User/untyingBanding'], resolve)
                },
                {
                    path: '/user/identity',
                    name: 'identity',
                    component: resolve => require(['../page/Wap/User/identity'], resolve)
                },
                {
                    path: '/user/identityInfo',
                    name: 'identityInfo',
                    component: resolve => require(['../page/Wap/User/identityInfo'], resolve)
                },
                {
                    path: '/search',
                    name: 'search',
                    component: resolve => require(['../page/Wap/Search'], resolve)
                },
                {
                    path: '/activity',
                    name: 'activity',
                    component: resolve => require(['../page/Wap/Activity'], resolve)
                },
                {
                    path: '/agreement',
                    name: 'agreement',
                    component: resolve => require(['../page/Wap/Agreement'], resolve)
                },
                {
                    path: '/gameDetail',
                    name: 'gameDetail',
                    component: resolve => require(['../page/Wap/GameDetail'], resolve)
                },
                {
                    path: '/gameDetail1',
                    name: 'gameDetail1',
                    component: resolve => require(['../page/Wap/GameDetail1'], resolve)
                },
                {
                    path: '/giftDetail/:id',
                    name: 'giftDetail',
                    component: resolve => require(['../page/Wap/GiftDetail'], resolve)
                },
                {
                    path: '/information',
                    name: 'information',
                    component: resolve => require(['../page/Wap/Information'], resolve)
                },
                {
                    path: '/rankList',
                    name: 'rankList',
                    component: resolve => require(['../page/Wap/RankList'], resolve)
                }
            ]
        },
        {
            path: '*',
            name: '404',
            component: resolve => { isMobile ? require(['../page/Wap/404/index.vue'], resolve) : require(['../page/Wap/404/index.vue'], resolve) }
        }
    ]
})
