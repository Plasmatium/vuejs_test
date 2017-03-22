<template>
  <div id="app">
    <!--
      <img src="./assets/logo.png">
      <test-computed/>
    -->
    <cond-render/>
  </div>
</template>

<script>
/*
import Hello from './components/Hello'
import simple from './components/simple.vue'
import testComputed from './components/test-computed.vue'
import classStyle from './components/class&style.vue'
*/
import condRender from './components/cond-render.vue'

export default {
  name: 'app',
  components: {
    condRender
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
