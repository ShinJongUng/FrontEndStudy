<template>
  <MyBtn>
    <template #icon>
      <span>(B)</span>
    </template>
    <template #text>
      <span>Banana</span>
    </template>
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn'
export default {

  components:{
    MyBtn
  },
  data() {   
    return{
    }
  }
}
</script>
