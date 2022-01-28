<template>
  <a href="https://naver.com"
  target="_blank"
  @click.once.prevent="handler">
  Naver</a>

  <div class ="parent" @click.self="handlerA">
    <div class="child"></div></div>
  
</template>
  

<script>
export default {
  data() {
  },
  computed:{
  },
  methods:{
    handler(){
      console.log('ABC!')
    },
    handlerA() {
      console.log('A')

    },
    handlerB(){
      console.log('B')
    }
  }
}
</script>

<style scoped lang="scss">
  .parent{
    width: 200px;
    height: 100px;
    background-color: royalblue;
    padding: 10px;
    margin: 10px;
  }
  .child{
    width: 100px;
    height: 100px;
    background-color: orange;
  }
</style>