import Vue from 'vue'
import App from './App.vue'
import Cordova from './Cordova.js'

import store from './store';
import router from './router';
import img from './imagenes/splas_red_social.jpg'
import img2 from './imagenes/amigos.jpg'
import { sync } from 'vuex-router-sync';

sync(store, router);
Vue.config.ignoredElements[
	'ion-app',
	'ion-content',
	'ion-button',
	'ion-page',
	'ion-title',
	'ion-header',
	'ion-toolbar'
	]
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
