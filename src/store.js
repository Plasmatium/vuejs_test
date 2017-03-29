import Vue from 'vue'
import Vuex from 'vuex'
import {Item} from './utils/item'

Vue.use(Vuex)

/* This is for mock data */
import {mockList} from './utils/mock_tdlist'
/*************************/

const store = new Vuex.Store({
  state: {
    tdlist: mockList
  },

  getters: {
    total: state => state.tdlist.length,
    doneCount: state => state.tdlist.reduce(
      (acc, val) => acc += val.done?1:0,
      0
    ),
    undoneCount: (state, getters) => getters.total - getters.doneCount,
  },

  mutations: {
  }
})

export default store
