import Login from '@/views/auth/Login'
import SmsCode from '@/views/auth/SmsCode'
import BaseInfo1 from '@/views/auth/BaseInfo1'
import BaseInfo2 from '@/views/auth/BaseInfo2'

export default [
  { path: '/auth/login', name: 'AuthLogin', component: Login },
  { path: '/auth/sms', name: 'AuthSmsCode', component: SmsCode },
  { path: '/auth/info_1', name: 'AuthBaseInfo1', component: BaseInfo1 },
  { path: '/auth/info_2', name: 'AuthBaseInfo2', component: BaseInfo2 }
];
