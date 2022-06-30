import { reqGetCatesFirst, reqGetCatesSecond } from "@/api";
import { catesFirst,catesSecond } from '@/utils/editlist'
//home模块的仓库
const state = {
  catesFirst: [],
  catesSecond: []
};
//mutions是唯一修改state的地方
const mutations = {
  GETCATESFIRST (state, catesFirst) {
    state.catesFirst = catesFirst
  },
  GETCATESSECOND (state, catesSecond) {
    state.catesSecond = catesSecond
  }
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  // 一级
  async getCatesFirst({commit}) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqGetCatesFirst();
    if (result.code == 200) {
      commit("GETCATESFIRST", result.data);
      catesFirst(result.data)
    }
  },
  // 二级
  async getCatesSecond({commit}) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqGetCatesSecond();
    if (result.code == 200) {
      commit("GETCATESSECOND", result.data);
      catesSecond(result.data)
    }
  },
  // 发布文章
};
//计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
