import { reqGetDailyList,reqGetDailyNum } from "@/api";
//home模块的仓库
const state = {
  dailyList: [],
  dailyNum: null
};
//mutions是唯一修改state的地方
const mutations = {
  GETDAILYLIST (state, dailyList) {
    state.dailyList = dailyList
  },
  GETDAILYNUM (state, dailyNum) {
    state.dailyNum = dailyNum
  },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  async getDailyList(context,params = {}) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用
    let result = await reqGetDailyList(params);
    if (result.code == 200) {
      context.commit("GETDAILYLIST", result.data);
    }
  },
  async getDailyNum(context) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用
    let result = await reqGetDailyNum();
    if (result.code == 200) {
      context.commit("GETDAILYNUM", result.data);
    }
  },
};
//计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};


