import Vue from 'vue'
import NestModal from './commons/NestModal.vue'
import NestCheck from './commons/NestCheck.vue'
import NestRadio from './commons/NestRadio.vue'

let components = {
  NestModal,
  NestCheck,
  NestRadio
};

let install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  });
}

export default Object.assign(components, { install });
