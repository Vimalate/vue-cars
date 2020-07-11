/*
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:33:55
 * @LastEditTime: 2020-07-11 22:56:55
 * @Description: 
 * @FilePath: \vue-cars\car\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugin/aMap.js"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");