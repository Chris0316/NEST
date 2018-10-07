import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import LeaseList from '@/views/LeaseList'
import Search from '@/views/Search'
import Details from '@/views/Details'

import Slider from '@/components/commons/NestSlider'

Vue.use(Router)

export default new Router({
  routes:
    [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'LeaseList',
      component: LeaseList
    }, {
      path: '/Search',
      name: 'Search',
      component: Search
    }, {
      path: '/details',
      name: 'Details',
      component: Details
    }]
})


