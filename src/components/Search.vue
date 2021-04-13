/**
* @author  sparkHou
* @date 2021-04-13 22:28
* @Description:
*/
<template>
  <div>
    {{age}}
  </div>
</template>

<script>
  import {reactive, toRefs, watchEffect, watch} from 'vue'

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
      setInterval(() => {
        test.age++
      }, 1000)
      return {
        ...toRefs(test),
      }

    }
  }
</script>

<style scoped>

</style>
