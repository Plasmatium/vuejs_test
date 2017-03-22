<template>
  <div id="app">
    <!--
      <img src="./assets/logo.png">
      <test-computed/>
    -->
    <class-style/>
  </div>
</template>

<script>
import Hello from './components/Hello'
import simple from './components/simple.vue'
import testComputed from './components/test-computed.vue'
import classStyle from './components/class&style.vue'


export default {
  name: 'app',
  components: {
    Hello,
    simple,
    testComputed,
    classStyle
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
