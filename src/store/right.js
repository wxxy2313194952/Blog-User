import { reqGetRightInfo, reqGetHotArticle } from "@/api/index";

const state = {
  info: {},
  artList: []
}

const mutations = {
  GETRIGHTINFO (state, info) {
    state.info = info
  },
  GETHOTARTICLE (state, artList) {
    state.artList = artList
  }
}

const actions = {
    // 获取留言列表  分页
    async getRightInfo ({ commit }) {
      let result = await reqGetRightInfo()
      if (result.code == 200) {
        commit('GETRIGHTINFO', result.data)
        return result.message
      }else {
        return Promise.reject(result.message)
      }
    },
    // 获取留言总数
    async getHotArticle ({ commit }) {
      let result = await reqGetHotArticle()
      if (result.code == 200) {
        commit('GETHOTARTICLE', result.data)
        return result.message
      }else {
        return Promise.reject(result.message)
      }
    }
};
export default {
  state,
  mutations,
  actions
};