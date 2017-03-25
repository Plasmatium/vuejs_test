<template lang="html">
  <div class="todo-list">
    <h2>Todo List</h2>
    <p>Filters:{{filter}}</p>
    <select v-model="filter">
      <option v-for="x in filters">{{x}}</option>
    </select>
    </select>
    <table>
      <th>
        <button>+</button>
        <input placeholder="Create new TODO"/>
      </th>
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
</style>
