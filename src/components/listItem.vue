<template lang="html">
  <div class='list-item'>
    <input type="checkbox"
    :checked="item.done"
    @click='toggleDoneState'></input>
    <span>{{item.contents}}</span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

let computed = {
}

let methods = {
  ...mapMutations([
    'updateDoneState'
  ]),
  toggleDoneState () {
    // commit newItem to tdlist[idx]
    let newDone = this.item.done ^ 1
    let newItem = Immutable.merge(this.item, {done: newDone}).asMutable()

    this.$store.commit('updateDoneState', {
      item: newItem,
      idx: this.idx
    })
  }
}

export default {
  name: 'list-item',
  props: ['item', 'idx'],
  computed,
  methods,
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
