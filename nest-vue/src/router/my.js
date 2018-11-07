import My from '@/views/My'
import MyGround from '@/views/my/Ground'
import MyDetails from '@/views/my/Details'

export default [
  { path: '/my', name: 'My', component: My },
  { path: '/my/ground', name: 'MyGround', component: MyGround },
  { path: '/my/details', name: 'MyDetails', component: MyDetails }
]
