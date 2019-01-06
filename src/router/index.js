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
      //redirect: '/index'
      redirect: '/home'
    },{
      path: '/question',
      component: Question
    },{
      path: '/home',
      component: Home 
    },{
      path: '/menu',
      component: Menu 
    }]
  })
  
  export default router;