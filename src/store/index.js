//引入Vuex -----相当于咱们最大的仓库
import Vuex from "vuex";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(Vuex);
import getters from './getters'
//引入home|search模块的仓库
import article from "./article";
import message from "./message";
import nav from "./nav";
import echarts from "./echarts";
import right from "./right";
import home from "./home";

export default new Vuex.Store({
  modules: {
    article,
    message,
    nav,
    echarts,
    right,
    home
  },
  getters
});