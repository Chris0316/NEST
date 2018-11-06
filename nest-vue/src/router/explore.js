import Explore from '@/views/Explore'
import List from '@/views/List'
import Search from '@/views/Search'
import Details from '@/views/Details'
import Publish from '@/views/Publish'

export default [
  { path: '/explore', name: 'Explore', component: Explore },
  { path: '/list/:type', name: 'List', component: List },
  { path: '/search', name: 'Search', component: Search },
  { path: '/details/:type/:id', name: 'Details', component: Details },
  { path: '/explore/publish', name: 'Publish', component: Publish }
]
