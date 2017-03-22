<template lang="html">
  <div class="cond-render">
    <div class="login">
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
      </template>
      <br>
      <button @click="toggle">Toggle login type</button>
    </div>

    <li v-for="(value, index) in rd">
      {{index+': '+value}}
    </li>
  </div>
</template>

<script>
let data = {
  loginType: 'username',
  logname: '',
  logemail: '',
  rd: ['a', 'b', 'c', 'd', 'e']
}

let methods = {
  toggle () {
    if (this.loginType == 'username')
      this.loginType = 'email'
    else
      this.loginType = 'username'
  }
}

export default {
  name: 'condRender',
  data: () => data,
  methods
}
</script>

<style lang="css">
</style>
