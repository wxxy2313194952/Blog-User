import { reqGetArticleList,reqGetArticleNum } from "@/api";
//home模块的仓库
const state = {
  articleList: {},
  articleNum: null
};
//mutions是唯一修改state的地方
const mutations = {
  GETARTICLELIST (state,articleList) {
    state.articleList = articleList
  },
  GETARTICLENUM (state,articleNum) {
    state.articleNum = articleNum
  },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  async getArticleList({commit}, params = {}) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqGetArticleList(params);
    if (result.code == 200) {
      commit("GETARTICLELIST", result.data);
    }
  },
  async getArticleNum({commit}) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqGetArticleNum();
    if (result.code == 200) {
      commit("GETARTICLENUM", result.data);
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
