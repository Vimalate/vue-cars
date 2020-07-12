<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-12 18:37:56
 * @LastEditTime: 2020-07-12 19:12:43
 * @Description: 
 * @FilePath: \vue-cars\car\src\views\car\index.vue
--> 
<template>
  <div class="car_wrap">
    <span @click="showUser">汽车</span>
  </div>
</template>

<script>
export default {
  name: "Car",
  data() {
    return {};
  },
  methods: {
    showUser() {
      if (this.$route.name !== "User") {
        this.$router.push({
          name: "User"
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.car_wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>