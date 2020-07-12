/*
 * @Author: Vimalakirti
 * @Date: 2020-07-11 22:55:04
 * @LastEditTime: 2020-07-12 16:26:47
 * @Description:
 * @FilePath: \vue-cars\car\src\plugin\aMap.js
 */
import Vue from "vue";
import VueAMap from "vue-amap";

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "6898b899892b67e8c73ed7dee17d3719",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  uiVersion: '1.0',
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});