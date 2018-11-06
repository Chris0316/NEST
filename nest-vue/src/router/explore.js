import Explore from '@/views/Explore'
import List from '@/views/List'
import Search from '@/views/Search'
import Details from '@/views/Details'
import Pulish from '@/views/Pulish'

export default [
  { path: '/explore', name: 'Explore', component: Explore },
  { path: '/list/:type', name: 'List', component: List },
  { path: '/search', name: 'Search', component: Search },
  { path: '/details/:type/:id', name: 'Details', component: Details },
  { path: '/pulish', name: 'Pulish', component: Pulish }
]
