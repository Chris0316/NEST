import Vue from 'vue'
import Router from 'vue-router'

/**
 * 四大模块首页
 * */
import Explore from '@/views/Explore'
import Follow from '@/views/Follow'
import Live from '@/views/Live'
import My from '@/views/My'

/**
* 可公用页面组件
* */
import List from '@/views/List'
import Search from '@/views/Search'
import Details from '@/views/Details'

/**
 * 登录/注册流程页面
 * */
import Login from '@/views/auth/Login'
import SmsCode from '@/views/auth/SmsCode'
import BaseInfo1 from '@/views/auth/BaseInfo1'
import BaseInfo2 from '@/views/auth/BaseInfo2'
import Country from '@/views/auth/Country'
import Language from '@/views/auth/Language'

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
      path: '/my',
      name: 'My',
      component: My
    }, {
      path: '/live',
      name: 'Live',
      component: Live
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
      path: '/country',
      name: 'Country',
      component: Country
    }, {
      path: '/language',
      name: 'Language',
      component: Language
    }, {
      path: '/sms',
      name: 'SmsCode',
      component: SmsCode
    }, {
      path: '/info_1',
      name: 'BaseInfo1',
      component: BaseInfo1
    }, {
      path: '/info_2',
      name: 'BaseInfo2',
      component: BaseInfo2
    }]
})


