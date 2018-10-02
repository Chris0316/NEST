import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import LeaseList from '@/views/LeaseList'
import search from '@/views/search'
import searchRentList from '@/views/searchRentList'


Vue.use(Router)

export default new Router({
  routes:
    [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/list',
        name: 'LeaseList',
        component: LeaseList

      },
      {
        path: '/search',
        name: 'search',
        component: search
      },
      {
        path: '/searchRentList',
        name: 'searchRentList',
        component: searchRentList
      },
    ]
})


