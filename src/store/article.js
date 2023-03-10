import { reqGetArticleList,reqGetArticleNum,reqGetArticleClass } from "@/api";
import { Host } from "@/utils/Host";
//home模块的仓库
const state = {
  artClass: [],
  articleList: {},
  articleNum: null
};
//mutions是唯一修改state的地方
const mutations = {
  GETARTCLASS (state, artClass) {
    state.artClass = artClass
  },
  GETARTICLELIST (state, { articleList, articleClass }) {
    articleList.forEach(el => {
      el.cover_img = Host + el.cover_img
      articleClass.forEach(item => {
        if (el.classification == item.id)
          el.classification = item.name
      })
    })
    state.articleList = articleList
  },
  GETARTICLENUM (state,articleNum) {
    state.articleNum = articleNum
  },
};
const actions = {
  // 获取文章分类
  async getArtClass ({commit}) {
    let result = await reqGetArticleClass()
    if (result.code == 200) {
      commit('GETARTCLASS', result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  // 获取文章列表  分页
  async getArticleList ({ commit }, params) {
    let result1 = await reqGetArticleList(params)
    let result2 = await reqGetArticleClass()
    if (result1.code == 200 && result2.code == 200) {
      commit('GETARTICLELIST', {
        articleList: result1.data,
        articleClass: result2.data
      })
      return result1.message
    }else {
      return Promise.reject(result1.message || result2.message)
    }
  },
  async getArticleNum({commit}) {
    let result = await reqGetArticleNum();
    if (result.code == 200) {
      commit("GETARTICLENUM", result.data);
    }else {
      return Promise.reject(result.message)
    }
  },
}
export default {
  state,
  mutations,
  actions
}
