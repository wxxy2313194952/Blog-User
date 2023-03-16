import { reqGetLineCharts, reqGetLineChartsIP, reqGetLastweek, reqGetPieBehavior, reqGetPieMenu, reqGetUserData } from '@/api'

const state = {
  lineCharts: [],
  lineChartsIP: [],
  lastWeek: [],
  pieBehavior: [],
  pieMenu: [],
  userData: {}
}

const mutations = {
  GETLINECHARTS (state, lineCharts) {
    state.lineCharts = lineCharts
  },
  GETLINECHARTSIP (state, lineChartsIP) {
    state.lineChartsIP = lineChartsIP
  },
  GETLASTWEEK (state, lastWeek) {
    state.lastWeek = lastWeek
  },
  GETPIEBEHAVIOR (state, pieBehavior) {
    state.pieBehavior = pieBehavior
  },
  GETPIEMENU (state, pieMenu) {
    state.pieMenu = pieMenu
  },
  GETUSERDATA (state, userData) {
    state.userData = userData
  },
}

const actions = {
  async getLineCharts ({ commit }, day) {
    let result = await reqGetLineCharts(day)
    if (result.code == 200) {
      commit('GETLINECHARTS',result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  async getLineChartsIP ({ commit }, day) {
    let result = await reqGetLineChartsIP(day)
    if (result.code == 200) {
      commit('GETLINECHARTSIP',result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  async getLastweek ({ commit }, day) {
    let result = await reqGetLastweek(day)
    if (result.code == 200) {
      commit('GETLASTWEEK',result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  async getPieBehavior ({ commit },day) {
    let result = await reqGetPieBehavior(day)
    if (result.code == 200) {
      commit('GETPIEBEHAVIOR',result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  async getPieMenu ({ commit },day) {
    let result = await reqGetPieMenu(day)
    if (result.code == 200) {
      commit('GETPIEMENU',result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  async getUserData ({ commit }) {
    let result = await reqGetUserData()
    if (result.code == 200) {
      commit('GETUSERDATA',result.data)
      return result.message
    }else {
      return Promise.reject(result.message)
    }
  },
  
}
export default {
  state,
  mutations,
  actions
};