<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:37:05
 * @LastEditTime: 2020-07-12 16:41:26
 * @Description: 
 * @FilePath: \vue-cars\car\src\views\index\index.vue
-->
<template>
  <div class="amap-wrap">
    <Map />
  </div>
</template>

<script>
import Map from "../amap/index";
export default {
  name: "Index",
  data() {},
  components: { Map }
};
</script>
<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>
