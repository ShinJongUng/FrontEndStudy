<template>
  <button @click="handler('hi')">
    Click 1
  </button>
  <button @click="handler('wht')">
    Click 2
  </button>
</template>
  

<script>
import shortid from 'shortid'
export default {
  data() {
  },
  computed:{
  },
  methods:{
    handler(msg){
      console.log(msg)
    }
  }
 
}
</script>

