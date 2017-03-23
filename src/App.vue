<template>
  <div id="app">    
    <!--
      <img src="./assets/logo.png">
      <test-computed/>
    -->
    <todo-list/>
  </div>
</template>

<script>
/*
import Hello from './components/Hello'
import simple from './components/simple.vue'
import testComputed from './components/test-computed.vue'
import classStyle from './components/class&style.vue'
import condRender from './components/cond-render.vue'
*/
import todoList from './components/todoList.vue'
import store from './store'

export default {
  name: 'app',
  store,
  components: {
    todoList
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
