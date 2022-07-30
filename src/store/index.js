import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import field from './modules/field.store'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    field,
  },
  plugins: [createPersistedState({
    paths: ['field'],
  })],
});
