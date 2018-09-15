// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';
import VueTour from 'vue-tour';
import draggable from 'vuedraggable';

require( 'vue-tour/dist/vue-tour.css');

Vue.config.productionTip = false;
Vue.use(Vuex);  
Vue.use(VueTour);
Vue.use(draggable);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {
    App,
  },
});
