<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-12 19:26:44
 * @LastEditTime: 2020-07-12 20:25:49
 * @Description: 
 * @FilePath: \vue-cars\car\src\components\navBar.vue
--> 
<template>
  <div class="navbar">
    <ul>
      <li>
        <i class="iconfont icon-help"></i>
      </li>
      <li>
        <i class="iconfont icon-sousuo"></i>
      </li>
      <li>
        <i class="iconfont">button</i>
      </li>
      <li>
        <i class="iconfont icon-dingwei"></i>
      </li>
      <li>
        <i class="iconfont icon-gerenzhongxin"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.navbar {
  position: fixed;
  left: 0;
  bottom: 86px;
  right: 0;
  z-index: 10;
  text-align: center;
  li {
    display: inline-block;
  }
}
</style>