import Vue from 'vue'
import App from './App.vue'
import Cordova from './Cordova.js'

import store from './store';
import router from './router';
import img from './imagenes/splas_red_social.jpg'
import img2 from './imagenes/amigos.jpg'
import { sync } from 'vuex-router-sync';
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
sync(store, router);

// Load Vue instance
new Vue({
  router,
	store,
	img,
	img2,
  el: '#app',
  render: h => h(App),
  mounted() {
    Cordova.initialize()
  }
})
