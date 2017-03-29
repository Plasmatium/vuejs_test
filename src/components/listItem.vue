<template lang="html">
  <tr class='list-item'
    @hover="commitItem(idx)"
    v-show="show">
    <td>
      <input class="checkbox"
        type="checkbox"
        v-model="item.done">
      </input>
    </td>
    <td id="main-data">
      <tr>
        <input class="contents" v-model="item.contents"/>
      </tr>
      <tr>
        <input class="postpone" v-model="item.postpone"/>
        <input class="doneDate" v-model="item.doneDate"/>
      </tr>
    </td>
  </tr>
</template>

<script>
import {mapMutations} from 'vuex'

let computed = {
  show () {
    if (this.filter === 'all') return true
    let state = this.item.done?'done':'undone'
    return this.filter === state
  }
}

let methods = {
}

export default {
  name: 'list-item',
  props: ['item', 'idx', 'filter'],
  computed,
  methods,
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
input {
  border: 0
}

.contents {
  width: 99%;
  font-size: 24;
}

.postpone,.doneDate
{
  width: 48%
}

.list-item {
  box-shadow: 0.3px 0.3px 9.3px 0.3px #9e9e9e;
  margin-bottom: 3px;
}

.list-item:hover {
  box-shadow: 3px 1.62px 15px 1.62px #9e9e9e;
  margin-bottom: 3px;
}
</style>
