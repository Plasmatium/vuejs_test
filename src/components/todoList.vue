<template lang="html">
  <div class="todo-list">
    <h2>Todo List</h2>
    <button>+</button>
    <input placeholder="Create new TODO"/>
    <ul>
      <li v-for="(item, index) in tdlist">
        <list-item :item="item" :idx="index"/>
      </li>
    </ul>
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
</style>
