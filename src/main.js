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

Vue.use(FlagIcon);
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store, 
  components: { App },
  template: "<App/>"
});
