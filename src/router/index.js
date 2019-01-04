import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter) 

import Index from '../page/index'
import Question from '../page/question'

const router = new VueRouter({
    routes: [{
      path: '/index',
      component: Index
    }, {
      path: '*',
      redirect: '/index'
    },{
      path: '/question',
      component: Question
    }]
  })
  
  export default router;