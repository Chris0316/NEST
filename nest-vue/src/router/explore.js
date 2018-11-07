import Explore from '@/views/Explore'
import List from '@/views/explore/List'
import Search from '@/views/Search'
import Details from '@/views/explore/Details'
import Publish from '@/views/explore/Publish'

export default [
  { path: '/explore', name: 'Explore', component: Explore },
  { path: '/list/:type', name: 'List', component: List },
  { path: '/search', name: 'Search', component: Search },
  { path: '/details/:type/:id', name: 'Details', component: Details },
  { path: '/explore/publish', name: 'Publish', component: Publish }
]
