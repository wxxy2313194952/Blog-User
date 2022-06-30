import { reqGetArticle } from "@/api";
//home模块的仓库
const state = {
  article:{}
};
//mutions是唯一修改state的地方
const mutations = {
  GETARTICLE (state, article) {
    state.article = article
  },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  async getArticle(context,value) {
    //需要用await接受成功返回的结果，await必须要结合async一起使用
    let result = await reqGetArticle(value);
    if (result.code == 200) {
      context.commit("GETARTICLE", result.data);
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


