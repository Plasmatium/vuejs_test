<template lang="html">
  <div class='list-item'>
    <td>
      <input class="checkbox" type="checkbox" v-model="item.done"></input>
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
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

let computed = {
}

let methods = {
  ...mapMutations([
    'toggleDoneState',
    'updateItemContents'
  ]),
  commitItem (idx) {
    //commit('updateItemContents', {newItem})
  }
}

export default {
  name: 'list-item',
  props: ['item', 'idx'],
  computed,
  methods,
  data () {
    return {
      readonly_: true
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
  box-shadow: 1px 1px 1px #dddeee;
  margin-bottom: 3px;
}
</style>
