/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from '@/routes/index';
import store from '@/store/index';

// import Antd from "ant-design-vue"
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");




