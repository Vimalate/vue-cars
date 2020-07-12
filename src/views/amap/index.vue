<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-12 16:35:15
 * @LastEditTime: 2020-07-12 16:35:16
 * @Description: 
 * @FilePath: \vue-cars\car\src\views\amap\index.vue
--> 
<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:37:05
 * @LastEditTime: 2020-07-12 16:35:18
 * @Description: 
 * @FilePath: \vue-cars\car\src\views\index\index.vue
-->
<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer" :events="events" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Index",
  data() {
    return {
      map: null,
      zoom: 18,
      events: {}
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: [113.3076496, 23.120049],
        zoom: this.zoom //初始化地图层级
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>
