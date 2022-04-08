<template>
  <h1 
  v-bind:class="{active: isActive}"
  :style="{color, fontSize}"
  @click="activate">
    Hello?! {{isActive}}
  </h1>
</template>

<script>
export default {
  data() {
    return{
      isActive: false,
      color: 'orange',
      fontSize: '30px'
    }
  },
  methods: {
    activate() {
      this.isActive = true
    }
  }
}
</script>

<style scoped>
  .active {
    color: red;
    font-weight: bold;
  }
</style>