<template>
  <button @click="handler">
    Click
  </button>
  <ul>
    <li
    v-for="{id,name} in newFruits"
    :key="id">
    {{name}}-{{id}}
    </li>
  </ul>
</template>
  

<script>
import shortid from 'shortid'
export default {
  data() {
    return{
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed:{
    newFruits(){
      return this.fruits.map(fruit=> {
        return{
          id: shortid.generate(),
          name:fruit
        }
      })
    }
  },
  methods:{
    handler(){
      this.fruits.push('orange')
    }
  }
 
}
</script>

