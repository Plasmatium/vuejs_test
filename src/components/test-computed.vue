<template lang="html">
  <div class="test-computed">
    <input v-model='user_str'></input>
    <button @click='computedPlus'>computed+</button>
    <button @click='methodsPlus'>methods+</button>
    <button @click='clear'>clear all</button>
    <p>{{user_str}}</p>
    <p v-if="c_counter%2 == 0">{{'c| ' + revfunc}}</p>
    <!--
      <p v-if="c_counter%2 == 0">{{'c| ' + revfunc}}</p>
      <p v-for="x in range(m_counter)">{{'m| ' + m_revfunc(user_str)}}</p>
      <p v-for="x in range(c_counter)">{{'c| ' + revfunc}}</p>
      <p>{{'m| ' + m_revfunc(user_str)}}</p>
      <p>{{user_str | f_revfunc}}</p>
  -->
  <p>{{'m| ' + m_revfunc('other string')}}</p>
  </div>
</template>

<script>
import {range} from '../utils'
let _computed = {
  /*
   * 只要this.user有更新，那么会重复触发revfunc函数运行，
   * 无论这个usr_str之前是否出现过，是否已经有过计算结果，
   * cumputed属性不会缓存结果。但是多个标签对其引用则不会像
   * methods那样重复触发，多个标签只是对computed属性调用
   * getter
   */

   /* Ahead: safari默认只开启console.error，所以之前都是用
    * for循环空跑cpu来测试函数是否被执行。囧
    * ===================================================
    * 另外，本次试验存在效率问题，表现在单独增加computed属性时，
    * computed只做一次计算，第一次之后的几次都飞快。如果用methods
    * 来弄的话，每次都很慢。这都是正确的表现。但是如果增加过methods
    * 那么增加computed每次都会卡了，按理说，computed之后再增加
    * 都不会卡了。不过如果用clear all按钮methods属性的<p>标签
    * 清理掉之后，再添加computed属性的<p>标签就不卡了。也就是说，
    * 屏幕上没有methods的标签就不会卡，如果有methods的标签一定会卡，
    * 即使没有改变它的绑定值。并且即使methods属性的参数是别的字符串，
    * 它也会卡，也就是说这个m_revfunc被调用了。
    * 综上，此处行为并未达到预期。
    */
  revfunc () {
    console.warn('c_rev')
    return (this.user_str+'asdf').split('').reverse().join('')
  }
}

let _methods = {
  m_revfunc (str) {
    console.warn('m_rev')
    return str.split('').reverse().join('')
  },

  computedPlus () {
    this.c_counter += 1
    console.log('===========')
  },

  methodsPlus () {
    this.m_counter += 1
    console.log('===========')
  },

  clear () {
    this.c_counter = this.m_counter = 0
    console.log('===========')
  },

  range
}

let _filters = {
  f_revfunc (str) {
    console.warn('f_rev')
    return str.split('').reverse().join('')
  }
}

export default {
  name: "testComputed",
  data () {
    return {
      user_str: 'Hello',
      m_counter: 0,
      c_counter: 0
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
