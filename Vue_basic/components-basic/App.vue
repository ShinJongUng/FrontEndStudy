<template>
  <MyBtn  color = "red" text="apple"  />
  <MyBtn  :color = "color"  text="apple" />
  <MyBtn  color = "royalblue" text="apple" />
  <MyBtn large text="banana">banana</MyBtn>
  
</template>
  

<script>
import MyBtn from '~/components/MyBtn'
export default {

  components:{
    MyBtn
  },
  data() {
    return{
      color: '#000'
    }
  }
}
</script>
