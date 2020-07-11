<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:37:05
 * @LastEditTime: 2020-07-11 23:18:34
 * @Description: 
 * @FilePath: \vue-cars\car\src\views\index\index.vue
--> 
<template>
  <div class="amap-wrap">
    <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo"></el-amap>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      zoom: 18,
      center: [113.30764968, 23.1200491]
    };
  }
};
</script>
<style lang='scss' scoped>
.amap-wrap {
  height: 100vh;
}
</style>