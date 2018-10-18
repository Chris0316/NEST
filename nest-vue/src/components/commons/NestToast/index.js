import Vue from 'vue';
import NestToast from './NestToast';

const ToastConstructor = Vue.extend(NestToast);
let instance;

const Toast = {
  info(options = {}) {
    console.log(instance)
    instance = instance || new ToastConstructor({
      propsData: {
        visible: true,
        message: options.message,
        duration: options.duration,
        callback: options.callback
      }
    }).$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);
    // todo vue实例待销毁
  }
};

export default Toast;
