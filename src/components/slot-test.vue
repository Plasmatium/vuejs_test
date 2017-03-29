<template lang="html">
  <ul>
    <slot name="item"
      v-for="item in x2"
      :text="item.x"
      :text2="item.x + '_2'">
      <!-- fallback content here -->
    </slot>
  </ul>
</template>

<script>
export default {
  name: 'slot-test',
  data () {
    return {
      items: [{text:1}, {text:2}, {text:3}]
    }
  },
  computed: {
    x2 () { return this.items.map((item)=>{
      let ret = {}
      ret.x = item.text*16
      return ret
    }) }
  }
}
</script>

<style lang="css">
</style>
