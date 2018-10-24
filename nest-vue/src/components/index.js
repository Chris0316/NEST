import NestModal from './commons/NestModal.vue'
import NestCheck from './commons/NestCheck.vue'
import NestRadio from './commons/NestRadio.vue'
import NestListView from './commons/NestListView.vue'
import NestRange from './commons/NestRange.vue'
import NestSelect from './commons/NestSelect.vue'
import NestUpload from './commons/NestUpload.vue'

import NestHeader from './public/NestHeader'
import NestNav from './public/NestNav'

import NestToast from './commons/NestToast'

let components = {
  NestModal,
  NestCheck,
  NestRadio,
  NestListView,
  NestRange,
  NestSelect,
  NestHeader,
  NestNav,
  NestUpload
};

let install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  });
  Vue.prototype.$toast = NestToast;
}

export default { install };
