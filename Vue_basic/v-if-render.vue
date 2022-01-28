<template>
  <button @click="handler">click me</button>
  <template v-if="isShow">
    <h1>hello</h1>
    <p>dd</p>
    <p>ddd</p>
  </template>
  

  <h1 v-else-if="count >3">Count > 3</h1>
  <h1 v-else>good</h1>
  
</template>

<script>
export default {
  data() {
    return{
      isShow: true,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count++
    }
  }
}
</script>

