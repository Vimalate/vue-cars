/*
 * @Author: Vimalakirti
 * @Date: 2020-07-11 22:55:04
 * @LastEditTime: 2020-07-11 22:57:16
 * @Description: 
 * @FilePath: \vue-cars\car\src\plugin\aMap.js
 */
import Vue from 'vue';
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '6898b899892b67e8c73ed7dee17d3719',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});