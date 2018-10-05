import Vue from 'vue'
import NestModal from './commons/NestModal.vue'
import NestCheck from './commons/NestCheck.vue'
import NestRadio from './commons/NestRadio.vue'
import NestListView from './commons/NestListView.vue'
import NestSort from './commons/NestSort.vue'


let components = {
  NestModal,
  NestCheck,
  NestRadio,
  NestListView,
  NestSort
};

let install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  });
}

export default Object.assign(components, { install });
