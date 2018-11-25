import Vue from 'vue';
import axios from 'axios';
import Storage from './Storage';

let instance = axios.create({
  baseURL: 'http://api.ohmynest.com/api',
  timeout: 1000 * 3
});

instance.interceptors.request.use(
  config => {
    Vue.prototype.$toast.loading();
    let accessToken = Storage.getLocalStorage('nest_access_token');
    if (accessToken && accessToken.length !== 0) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  error => {
    Vue.prototype.$toast.hide();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    Vue.prototype.$toast.hide();
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    return response.data;
  },
  error => {
    Vue.prototype.$toast.hide();
    if (error.response) {
      if (error.response.status === 401) {
        /**
         *  未授权跳转到登录
         *  1. 清空localstorage accessToken
         *  2. 跳转登录页
         */
        Storage.setLocalStorage('nest_access_token', '');
        Vue.$router.push({name: 'login'});
      } else if (error.response.status >= 300 || error.response.status < 200) {
        //请求失败
        let message = error.response.data.message,
          errors = error.response.data.errors;
        console.log(errors);
        Vue.prototype.$toast.info({
          message: message
        });
        return Promise.reject('error');
      } else {
        return error;
      }
    }
    return Promise.reject(error.response.data) //请求错误时，直接结束
  }
);

export default instance;
