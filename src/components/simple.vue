<!-- This is for testing .vue components how works. -->

<template lang="html">
  <div class="simple">
    <p>{{ message }}</p>
    <p>{{"count is "+count}}</p>
    <button class='bAdd' :disabled="sec%2?true:false" @click="plus">{{Math.sin(count)}}</button>
    <button @click="sub">-</button>
    <ul>
      <li v-for="v in list">{{v}}</li>
    </ul>
    <input type="text" v-model="url"></input>
    <input :value="url"></input>
    <a :href="url">{{count | toHex}}</a>
  </div>
</template>

<script>
let range = (n) => {
  let rslt = new Array(n);
  for(let i=0; i<n; i++) {
    rslt[i] = i;
  }
  return rslt;
}

// data field================
let _data = {
  message: 'Hello Vue!',
  count: 12,
  sec: null,
  list: range(12),
  url: 'https://www.baidu.com'
};


// filters filed=============
let filters = {
  toHex: (v) => {
    return v.toString(16);
  }
}


//methods field=============
let methods = {
  plus: function() {
    this.count++;
    if(this.count>=0) this.list = range(this.count);
  },
  sub: function() {
    this.count--;
    if(this.count>=0) this.list = range(this.count);
  }
}


// computed field
let computed = {

}


export default {
  name: "simple",
  data () {
    return _data;
  },
  methods: methods,
  filters: filters,
  computed: computed,
  created: function() {
    console.log('message is', this.message);
    let tm = setInterval(() => {
      this.sec = new Date().getSeconds();
    }, 100)
  }
}
</script>

<style lang="css">
</style>
