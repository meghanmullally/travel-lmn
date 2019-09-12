import Vue from 'vue';
import App from './App.vue';
import router from "./router.js";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import moment from 'moment';
import { MdDatepicker, MdButton, MdField, MdList, MdIcon, MdToolbar, MdDrawer, MdLayout, MdCard, MdDivider, MdTable, MdContent, MdRipple, MdElevation, MdTabs, MdSubheader, MdSteppers} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
import Unsplash from 'unsplash-js';
import VueYouTubeEmbed from 'vue-youtube-embed';



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
Vue.use(MdSteppers);


Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueYouTubeEmbed);

const unsplash = new Unsplash({
  applicationId: "VUE_APP_UNSPLASH_ACCESS_KEY",
  secret: "VUE_APP_UNSPLASH_APP_SECRET"
});


Vue.prototype.moment = moment
Vue.prototype.unsplash = unsplash;

Vue.config.productionTip = false


export const store = new Vuex.Store({
  state: {
    originCity: '',
    destinationCity: '',
    departureDate: '',
    arrivalDate: '',
    // flightInfo: {
    //   originCode: '',
    //   destinationCode: '',
    //   dateCode: ''
    // }
  },
  mutations: {
    changeOrigin (state, payload) {
      state.originCity = payload.newCity
    },
    changeDestination(state, payload) {
      state.destinationCity = payload.newCity
    },
    changeDeparture(state, payload) {
      state.departureDate = payload.newDate
    },
    changeArrival(state, payload) {
      state.arrivalDate = payload.newDate
    },
    changeFlightInfo(state, payload){
      state.flightInfo = payload.newFlightInfo  
    }
    
  },
  getters: 
  {
    origin: state => state.originCity,
    destination: state => state.destinationCity
    // flightInfo: state => state.flightInfo,
  }
})

new Vue({
  el: "#app",
  router,
  moment,
  store,
  render: h => h(App),
})