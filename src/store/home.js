import { reqGetArtMain, reqGetArtOther } from "@/api/index";

const state = {
  artMain1: {},
  artMain2: {},
  artMain3: {},
  artOther1: {},
  artOther2: {},
  artOther3: {},
}

const mutations = {
  GETARTMAIN (state, data) {
    state.artMain1 = data[0]
    state.artMain2 = data[1]
    state.artMain3 = data[2]
  },
  GETARTOTHER (state, data) {
    state.artOther1 = data[0]
    state.artOther2 = data[1]
    state.artOther3 = data[2]
  }
}

const actions = {
  // 
  async getArtMain ({ commit }) {
    let result = await reqGetArtMain()
    if (result.code == 200) {
      commit('GETARTMAIN', result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  // 
  async getArtOther ({ commit }) {
    let result = await reqGetArtOther()
    if (result.code == 200) {
      commit('GETARTOTHER', result.data)
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