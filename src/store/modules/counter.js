const state = {
  count: 23,
}

const mutations = {
  increment(state) {
    state.count++
  },
}

const actions = {
  increment({ commit }) {
    commit('increment')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
