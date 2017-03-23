<template lang="html">
  <div class='list-item'>
    <input type="checkbox"
    :checked="item.checked"
    @click='update'></input>
    <span>{{item.contents}}</span>
  </div>
</template>

<script>
let computed = {
}

let methods = {
  update () {
    this.item.checked ^= 1
    //this.$emit('update', this.item)
  }
}

export default {
  name: 'list-item',
  props: ['item'],
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
