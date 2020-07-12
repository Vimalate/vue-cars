<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:37:05
 * @LastEditTime: 2020-07-12 19:28:59
 * @Description: 
 * @FilePath: \vue-cars\car\src\views\index\index.vue
-->
<template>
  <div class="amap-wrap">
    <Car />
    <Map />
    <div class="car" :class="{open:isShowUser}">
      <router-view></router-view>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Map from "../amap/index";
import Car from "../car/index";
import Navbar from "../../components/navbar";
export default {
  name: "Index",
  data() {
    return {};
  },
  components: { Map, Car, Navbar },
  computed: {
    isShowUser() {
      const routeName = this.$route.name;
      return routeName === "Index" ? false : true;
    }
  }
};
</script>
<style lang="scss" scoped>
.amap-wrap {
  .car {
    position: fixed;
    top: 0;
    right: -600px;
    bottom: 0;
    z-index: 101;
    width: 250px;
    background-color: #34393f;
    transition: all 0.3s ease 0s;
    &.open {
      right: 0;
    }
  }
}
</style>
