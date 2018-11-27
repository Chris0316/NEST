import Live from '@/views/Live'
import LivePublish from '@/views/live/Publish'

export default [
  { path: '/live', name: 'Live', component: Live, meta: { keepAlive: false, slideLevel: 1 } },
  { path: '/live/publish', name: 'LivePublish', component: LivePublish, meta: { keepAlive: false, slideLevel: 1 } }
]
