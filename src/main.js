import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({ ... })


// import { MdDatepicker, MdButton, MdField} from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(MdDatepicker);
// Vue.use(MdButton);
// Vue.use(MdField);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')