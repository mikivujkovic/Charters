// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import moment from "moment";
import FlagIcon from "vue-flag-icon";
import store from './store/store.js'
import VueAnalytics from 'vue-analytics'

Vue.use(FlagIcon);
Vue.use(Vuetify);
Vue.use(VueAnalytics, {
  id: 'UA-119195005-1',
  router
})
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store, 
  components: { App },
  template: "<App/>"
});
