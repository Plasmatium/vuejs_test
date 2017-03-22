<template lang="html">
  <div class="class-style">
    <ul>
      <li v-for="key in Object.keys(cls_obj)">
        <input type='checkbox' v-model='cls_obj[key]'>{{key}}</input>
      </li>
    </ul>
    <p :class='cls_obj | to_list'>test text</p>
    <p>{{cls_obj | to_list}}</p>
  </div>
</template>

<script>
let data = {
  cls_obj: {
    c1:false,
    c2:false,
    c3:false
  }
}

let computed = {
}

let filters = {
  to_list (obj) {
    let keys = Object.keys(obj)
    let list = []
    for(let key of keys) {
      if(obj[key]) list.push(key)
    }
    return list.join(' ')
  }
}

let methods = {
  btnC1 () {
    //this.cls.push('c1')
  }
}

export default {
  name: 'class-style',
  data: () => data,
  methods,
  computed,
  filters
}
</script>

<style lang="css" scope>
p {
  width: 50%;
}
.c1 {
  background-color: #ededed;
}

.c2 {
  font-family: '宋体';
}

.c3 {
  color: #3377ff;
}
</style>
