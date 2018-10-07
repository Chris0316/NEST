import Vue from 'vue'
import NestModal from './commons/NestModal.vue'
import NestCheck from './commons/NestCheck.vue'
import NestRadio from './commons/NestRadio.vue'
import NestListView from './commons/NestListView.vue'
import NestSelect from './commons/NestSelect.vue'

import NestHeader from './public/NestHeader'

let components = {
  NestModal,
  NestCheck,
  NestRadio,
  NestListView,
  NestHeader,
  NestSelect
};

let install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  });
}

export default Object.assign(components, { install });
