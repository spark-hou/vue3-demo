/**
* @author  sparkHou
* @date 2021-04-13 22:28
* @Description:
*/
<template>
  <div>
    {{age}}
    {{content.data}}
    <br>
    <input type="text" v-model="content.data">
  </div>
</template>

<script>
  import {reactive, toRefs, watchEffect, watch, inject} from 'vue'

  export default {
    name: "Search",
    setup() {
      let test = reactive({
        name: 'hhaha',
        age: 20
      })
      watchEffect(() => {
        console.log(test.age, '====')
      })
      watch(test, () => {
        console.log(test.age, '=watch===')
      })
      let content = inject('content')
      setInterval(() => {
        test.age++
      }, 1000)
      return {
        ...toRefs(test),
        content
      }

    }
  }
</script>

<style scoped>

</style>
