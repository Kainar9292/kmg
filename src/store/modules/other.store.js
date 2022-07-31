const state = {
  path: null
}

const mutations = {
  setPath: (state, payload) => {
    state.path = payload
  }
}

const actions = {
  setPath({ commit }, path) {
    console.log('run');
    commit('setPath', path)
  },
}

const getters = {
  path: state => state.path
}

export default {
  state, mutations, actions, getters, namespaced: true,
};

