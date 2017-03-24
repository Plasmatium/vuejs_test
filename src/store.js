import Vue from 'vue'
import Vuex from 'vuex'
import {Item} from './utils/item'

Vue.use(Vuex)

/* This is for mock data */
import {mockList} from './utils/mock_tdlist'
/*************************/

const store = new Vuex.Store({
  state: {
    tdlist: mockList,
  },

  getters: {
    //tdlist: state => state.raw_tdlist,

    done: state => state.tdlist.filter(item=>item.done),
    undone: state => state.tdlist.filter(item=>!item.done),

    total: state => state.tdlist.length,
    doneCount: (state, getters) => getters.done.length,
    undoneCount: (state, getters) => getters.undone.length
  },

  mutations: {
    toggleDoneState (state, pl) {
      state.tdlist[pl.idx].done ^= 1
    },
    updateItemContents (state, pl) {
      state.tdlist[pl.idx] = pl.item
    }
  }
})

export default store
