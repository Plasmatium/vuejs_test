<template lang="html">
  <div class="test-computed">
    <input v-model='full_name'/>
    <ul>
      <li>
        <input v-model='first_name'/>
      </li>
      <li>
        <input v-model='last_name'/>
      </li>
    </ul>
  </div>
</template>

<script>
import {range} from '../utils'
global.flag = []
let _computed = {
  /*
   * methods属性总是会被调用，computed属性只有依赖更新才会
   * 执行计算，否则只是调用其getter
   */
  full_name: {
    get () {
      console.log('get')
      if(this.last_name == undefined) {
        return this.first_name
      }
      else {
        return [this.first_name, this.last_name].join(' ')
      }
    },
    set (val) {
      console.log('setting...')
      setTimeout(()=> {
        [this.first_name, this.last_name] = val.split(' ')
        console.log('set completed')
      }, 1000)
    }
  },
}

let _methods = {
  range
}

let _filters = {

}

export default {
  name: "testComputed",
  data () {
    return {
      first_name: 'Hello',
      last_name: 'World'
    }
  },
  computed: _computed,
  methods: _methods,
  filters: _filters
}
</script>

<style lang="css" scpoed>
p {
  font-size: 8;
}
</style>
