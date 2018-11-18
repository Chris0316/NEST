import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://api.ohmynest.com/api',
  timeout: 1000 * 10,
  headers: {}
});

instance.interceptors.request.use(config => {
  console.log('请求发送前');
  return config;
}, error => {
  console.log('请求发生错误');
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
