<template>
  <input type="text" @keydown.ctrl.a="handler" />
</template>
  

<script>
export default {
  data() {
  },
  computed:{
  },
  methods:{
    handler(event){
      console.log('Enter')
    }
  }
}
</script>
