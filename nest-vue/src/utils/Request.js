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
  return response;
}, error => {
  console.log('响应发生错误');
  return Promise.reject(error);
});

export default instance;
