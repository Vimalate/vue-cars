/*
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:33:55
 * @LastEditTime: 2020-07-12 16:28:09
 * @Description:
 * @FilePath: \vue-cars\car\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugin/aMap.js";

const amapKeys = Object.keys(localStorage).filter(key => key.match(/^_AMap_/))

amapKeys.forEach(key => {
  // console.log(key)
  localStorage.removeItem(key)
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");