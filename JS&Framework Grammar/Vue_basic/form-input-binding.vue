<template>
  <h1>{{msg}}</h1>
  <input type="text" :value="msg" @input="msg = $event.target.value" />
  <input type="checkbox" v-model="checked">
  <h1>{{checked}}</h1>
</template>
  

<script>
export default {
  data() {
    return {
      msg: 'Hello world!',
      checked: false
    }
  },
  methods: {
    
  }
}
</script>
