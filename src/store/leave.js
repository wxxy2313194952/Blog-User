import { reqGetLeaveList,reqGetLeaveNum } from "@/api";
//home模块的仓库
const state = {
  leaveList: [],
  leaveNum:null,
};
//mutions是唯一修改state的地方
const mutations = {
  GETLEAVELIST (state,leaveList) {
    state.leaveList = leaveList
  },
  GETLEAVENUM (state,leaveNum) {
    state.leaveNum = leaveNum
  },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  async getLeaveList({commit}, params = {}) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqGetLeaveList(params);
    if (result.code == 200) {
      commit("GETLEAVELIST", result.data);
    }
  },
  async getLeaveNum({commit}) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqGetLeaveNum();
    if (result.code == 200) {
      commit("GETLEAVENUM", result.data);
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
