import My from '@/views/My'
import MyGround from '@/views/my/Ground'
import MyLive from '@/views/my/Live'
import MyDetails from '@/views/my/Details'
import MyProfile from '@/views/my/Profile'
import MyEdit from '@/views/my/Edit'
import MyCellphone from '@/views/my/Cellphone'
import MyAddCellphone from '@/views/my/AddCellphone'

export default [
  { path: '/my', name: 'My', component: My },
  { path: '/my/details', name: 'MyDetails', component: MyDetails },
  { path: '/my/ground', name: 'MyGround', component: MyGround },
  { path: '/my/live', name: 'MyLive', component: MyLive },
  { path: '/my/profile', name: 'MyProfile', component: MyProfile },
  { path: '/my/edit', name: 'MyEdit', component: MyEdit },
  { path: '/my/cellphone', name: 'MyCellphone', component: MyCellphone },
  { path: '/my/cellphone/add', name: 'MyAddCellphone', component: MyAddCellphone },
]
