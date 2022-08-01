import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import field from './modules/field.store'
import other from './modules/other.store'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    field,
    other
  },
  plugins: [createPersistedState({
    paths: ['other', 'field'],
  })],
});
