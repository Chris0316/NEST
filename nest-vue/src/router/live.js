import Live from '@/views/Live'
import LivePublish from '@/views/live/Publish'

export default [
  { path: '/live', name: 'Live', component: Live },
  { path: '/live/publish', name: 'LivePublish', component: LivePublish }
]
