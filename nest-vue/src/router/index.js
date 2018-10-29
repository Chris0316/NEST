import Vue from 'vue'
import Router from 'vue-router'
import Explore from '@/views/Explore'
import Follow from '@/views/Follow'
import List from '@/views/List'
import Search from '@/views/Search'
import Details from '@/views/Details'
import Login from '@/views/auth/Login'
import SmsCode from '@/views/auth/SmsCode'

Vue.use(Router)

export default new Router({
  routes:
    [{
      path: '/',
      redirect: { name: 'Explore' }
    }, {
      path: '/explore',
      name: 'Explore',
      component: Explore
    }, {
      path: '/follow',
      name: 'Follow',
      component: Follow
    }, {
      path: '/list/:type',
      name: 'List',
      component: List
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/details/:type/:id',
      name: 'Details',
      component: Details
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/sms',
      name: 'SmsCode',
      component: SmsCode
    }]
})


