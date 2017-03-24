<template lang="html">
  <div class='list-item'>
    <input type="checkbox"
    :checked="item.done"
    @click='$store.commit("toggleDoneState", {idx: idx})'></input>
    <input :readonly="readonly_"
    @dblclick="readonly_=false"
    @keyup.enter="commitItem(idx)"
    v-model="item.contents"></input>
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
</style>
