<template>
  <h1 
    v-once
    @[event]="add">
      {{ msg }}
  </h1>
  <h1 v-html="msg">
  </h1>

  <h1 :[attr]="amsg">{{amsg}}</h1>
</template>

<script>
export default {
  data() {
    return{
      msg: '<div style ="color:red;">Hello!</div>',
      amsg: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods:{
    add(){
      this.msg += '!'
    }
  }
}
</script>

<style scoped>
  .active{
    color:royalblue;
    font-size: 100px;
  }
</style>