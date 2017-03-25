<template lang="html">
  <div class="todo-list">
    <nav>
      <h2>Todo List</h2>
      <h3>Statistics:</h3>
      <span>All items: {{total}}.</span>
      <span>Items done: {{doneCount}}.</span>
      <span>Items undone: {{undoneCount}}.</span>
      <h3>Filters:{{filter}}</h3>
      <select v-model="filter">
        <option v-for="x in filters">{{x}}</option>
      </select>
      <button>+</button>
      <input placeholder="Create new TODO"/>
    </nav>
    <table style="margin-top: 250px">
      <tr v-for="(item, index) in selected">
        <list-item :item="item" :idx="index"/>
      </tr>
    </table>
  </div>
</template>

<script>
import listItem from './listItem'
import {mapState, mapGetters} from 'vuex'

let methods = {

}

let computed = {
  ...mapState([
    'tdlist'
  ]),
  ...mapGetters([
    'done',
    'undone',
    'all',
    'total',
    'doneCount',
    'undoneCount'
  ]),
  selected () {
    return this[this.filter]
  }
}

export default {
  name: 'todo-list',
  components : {
    listItem
  },
  data () {
    return {
      filters: ['all', 'done', 'undone'],
      filter: 'all',
    }
  },
  methods,
  computed
}
</script>

<style lang="css">
.todo-list {
  height: 80%
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background-color: white;
  border-bottom: 50px;
}
</style>
