<template lang="html">
  <div class="todo-list">
    <h2>Todo List</h2>
    <table border='0'>
      <th>
        <button>+</button>
        <input placeholder="Create new TODO"/>
      </th>
      <tr v-for="(item, index) in tdlist">
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
    'total',
    'doneCount',
    'undoneCount'
  ])
}

export default {
  name: 'todo-list',
  components : {
    listItem
  },
  data () {
    return {
    }
  },
  methods,
  computed
}
</script>

<style lang="css">
.todo-list {
  box-shadow: 3px 5px 10px #888888;
}
</style>
