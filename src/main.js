import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import moment from 'moment';
import Vuex from 'vuex';
// import Vuetify from "./plugins/vuetify";


import { MdDatepicker, MdButton, MdField} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdDatepicker);
Vue.use(MdButton);
Vue.use(MdField);

Vue.use(Vuex)

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
  // Vuetify,
  render: h => h(App),
}).$mount('#app')