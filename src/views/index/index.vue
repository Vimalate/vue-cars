<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:37:05
 * @LastEditTime: 2020-07-11 23:01:10
 * @Description: 
 * @FilePath: \vue-cars\car\src\views\index\index.vue
--> 
<template>
  <div class="amap-wrap">
    <el-amap vid="amapDemo" class="amap-demo"></el-amap>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.amap-wrap {
  height: 100vh;
}
</style>