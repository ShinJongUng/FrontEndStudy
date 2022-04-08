<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return{
      count:2
    }
  },
  beforeCreate(){
    console.log('Before Created!', this.count)
  },
  created(){
    console.log('Created!', this.count)
  },
  beforeMount(){
    console.log('Before Mounted!')
  },
  mounted(){
    console.log('Mounted!')
  
  }
}
</script>