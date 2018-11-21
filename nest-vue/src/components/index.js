import NestModal from './commons/NestModal.vue'
import NestCheck from './commons/NestCheck.vue'
import NestRadio from './commons/NestRadio.vue'
import NestListView from './commons/NestListView.vue'
import NestRange from './commons/NestRange.vue'
import NestSelect from './commons/NestSelect.vue'
import NestUpload from './commons/NestUpload.vue'
import NestSwitch from './commons/NestSwitch.vue'
import NestField from './commons/NestField.vue'
import NestButton from './commons/NestButton.vue'
import NestCalendar from './commons/NestCalendar.vue'
import NestSwipeCell from './commons/NestSwipeCell.vue'
import NestTabBar from './commons/NestTabBar.vue'
import NestTabItem from './commons/NestTabItem.vue'
import NestTabContainer from './commons/NestTabContainer.vue'
import NestTabContainerItem from './commons/NestTabContainerItem.vue'
import NestScroll from './commons/NestScroll'

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
  NestUpload,
  NestSwitch,
  NestField,
  NestButton,
  NestCalendar,
  NestSwipeCell,
  NestTabBar,
  NestTabItem,
  NestTabContainer,
  NestTabContainerItem,
  NestScroll
};

let install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  });
  Vue.prototype.$toast = NestToast;
}

export default { install };
