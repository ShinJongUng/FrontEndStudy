<template>
  <h1 @click="changeMessage">{{msg}}</h1>
  <h1>{{reversedMessage}}</h1>
</template>

<script>
export default {
  data() {
    return{
      msg: 'hello?'
    }
  },
  computed: {
    reversedMessage(){
      return this.msg.split('').reverse().join('')
    }
  },
  watch:{
    msg(){
      console.log('msg: ', this.msg)
    },
    reversedMessage(){
      console.log('reversedMessage', this.reversedMessage)
    }
  },
  methods: {
    changeMessage(){
      this.msg = 'Good!'
    }
  }
}
</script>