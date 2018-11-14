import Follow from '@/views/Follow'
import FollowList from '@/views/follow/FollowList'
import EconomicMan from '@/views/follow/EconomicMan'
export default [
  { path: '/follow', name: 'Follow', component: Follow },
  { path: '/follow/list', name: 'FollowList', component: FollowList },
  { path: '/follow/economic', name: 'EconomicMan', component: EconomicMan }
]
