import axios from 'axios';
import Utils from './Utils';


let instance = axios.create({
  baseURL: 'http://api.ohmynest.com/api',
  timeout: 1000 * 3
});

instance.interceptors.request.use(config => {
  config.headers['Authorization'] = Utils.getAccessToken() ? 'Bearer ' + Utils.getAccessToken() : '';
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  console.log('响应接收前');
  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  const res = response.data;

  if (res.status == 401) {
    //未授权跳转到登录
  }else if(res.status >= 300 || res.status < 200){
    //请求失败
    return Promise.reject('error');
  } else {
    return response.data;
  }
}, error => {
  console.log('响应发生错误');
  return Promise.reject(error);
});

export default instance;
