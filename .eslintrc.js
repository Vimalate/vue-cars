/*
 * @Author: Vimalakirti
 * @Date: 2020-07-11 21:33:55
 * @LastEditTime: 2020-07-12 16:06:54
 * @Description:
 * @FilePath: \vue-cars\car\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    AMap: true
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 'off'
  }
};