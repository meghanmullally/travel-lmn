import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import moment from 'moment';
import { MdDatepicker, MdButton, MdField, MdList, MdIcon, MdToolbar, MdDrawer, MdLayout, MdCard, MdDivider, MdTable, MdContent, MdRipple, MdElevation, MdTabs, MdSubheader} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdDatepicker);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdLayout);
Vue.use(MdCard);
Vue.use(MdDivider);
Vue.use(MdTable);
Vue.use(MdContent);
Vue.use(MdRipple);
Vue.use(MdElevation);
Vue.use(MdTabs);
Vue.use(MdSubheader);
// Vue.use(MdScrollbar);


Vue.use(VueAxios, axios);
Vue.use(Vuex);


Vue.prototype.moment = moment

Vue.config.productionTip = false

export const store = new Vuex.Store({
  state: {
    city: '',
    flightInfo: {
      originCode: '',
      destinationCode: '',
      dateCode: ''
    }
  },
  mutations: {
    changeCity (state, payload) {
      state.city = payload.newCity
    },
    changeFlightInfo(state, payload){
      state.flightInfo = payload.newFlightInfo  
    }
    
  },
  getters: 
  {
    city: state => state.city,
    flightInfo: state => state.flightInfo,
  }
})

new Vue({
  router,
  moment,
  store,
  render: h => h(App),
}).$mount('#app')