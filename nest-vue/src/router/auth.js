import Login from '@/views/auth/Login'
import SmsCode from '@/views/auth/SmsCode'
import BaseInfo1 from '@/views/auth/BaseInfo1'
import BaseInfo2 from '@/views/auth/BaseInfo2'

export default [
  { path: '/login', name: 'Login', component: Login },
  { path: '/sms', name: 'SmsCode', component: SmsCode },
  { path: '/info_1', name: 'BaseInfo1', component: BaseInfo1 },
  { path: '/info_2', name: 'BaseInfo2', component: BaseInfo2 }
];
