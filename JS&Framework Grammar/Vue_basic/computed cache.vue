<template>
  <h1>{{reversedMessage}}</h1>
  <h1>{{reversedMessage}}</h1>
  <h1>{{reversedMessage}}</h1>
  <h1>{{reversedMessage}}</h1>
  <h1>{{reversedMessage}}</h1>

</template>

<script>
export default {
  data() {
    return{
      msg: 'Hello Computed!'
    }
  },
  computed:{
      reversedMessage(){
      return this.msg.split('').reverse().join('')
    }// computed 안에선 한번만 연산 후 기억 즉 캐싱하고 있음
  },
  methods: {
    reverseMessage(){
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>