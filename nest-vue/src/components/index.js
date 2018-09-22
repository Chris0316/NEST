import Vue from 'vue'
import NestModal from './commons/NestModal.vue'

let components = {
  NestModal
};

let install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  });
}

export default Object.assign(components, { install });
