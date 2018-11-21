import Vue from 'vue'
import Router from 'vue-router'

import explore from './explore'
import follow from './follow'
import live from './live'
import my from './my'
import auth from './auth'

import Search from '@/views/Search'
import Country from '@/views/auth/Country'
import Language from '@/views/auth/Language'

Vue.use(Router)

let routes = [
  { path: '/', redirect: { name: 'Explore' } },
  { path: '/search', name: 'Search', component: Search },
  { path: '/country', name: 'Country', component: Country },
  { path: '/language', name: 'Language', component: Language }
].concat(explore, follow, live, my, auth);

export default new Router({
  routes: routes
})


