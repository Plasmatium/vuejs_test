<template lang="html">
  <div class="todo-list">
    <h2>Todo List</h2>
    <br>
    <ul>
      <li v-for="item in tlists">
        <list-item :item="item"
        @update="function (newItem) {item = newItem}"/>
      </li>
    </ul>
  </div>
</template>

<script>
import listItem from './listItem'

let methods = {
}

export default {
  name: 'todo-list',
  components : {
    listItem
  },
  data () {
    return {
      tlists: [
        {checked: true, contents: 'contents1'},
        {checked: false, contents: 'contents2'},
      ],
    }
  },
  methods

}
</script>

<style lang="css">
</style>
