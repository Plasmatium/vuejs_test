import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tdlist: [
      { done: 1, contents: 'do this'},
      { done: 0, contents: 'do that'}
    ],
  },

  mutations: {

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
    updateDoneState (state, pl) {
      Vue.set(state.tdlist, [pl.idx], pl.item)
    }
  }
})

export default store
