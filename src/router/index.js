/*
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:33:56
 * @LastEditTime: 2020-07-11 21:44:56
 * @Description: 
 * @FilePath: \vue-cars\car\src\router\index.js
 */ 
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
