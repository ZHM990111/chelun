import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Index from '../page/index'
import Question from '../page/question'
import Home from '../page/home'
import Menu from '../page/menu'


const router = new VueRouter({
  routes: [{
    path: '/index',
    component: Index
  }, {
    path: '*',
    redirect: '/index'
    // redirect: '/home'
  }, {
    path: '/question',
    component: Question
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/menu',
    component: Menu
  }]
})


// 跳转之前
// router.beforeEach((to, from, next) => {
//   if (getToken()) {
//     next();
//   } else {
//     goLogin();
//   }
//   // next();
// })

// // 跳转之后
// router.afterEach((to, from) => {

// })

export default router;