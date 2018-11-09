import My from '@/views/My'
import MyGround from '@/views/my/Ground'
import MyLive from '@/views/my/Live'
import MyDetails from '@/views/my/Details'

export default [
  { path: '/my', name: 'My', component: My },
  { path: '/my/details', name: 'MyDetails', component: MyDetails },
  { path: '/my/ground', name: 'MyGround', component: MyGround },
  { path: '/my/live', name: 'MyLive', component: MyLive }
]
