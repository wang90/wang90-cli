import Vue from 'vue'
import App from './App.vue';
import "./css/base.css";
import "./css/config.less";
import "./libs/rem";
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui';

import router from "./router";
import store from "./vuex";

Vue.use(ElementUI);
Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
