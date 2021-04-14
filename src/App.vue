<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  {{msg}}
  <div>
    {{title}}
    {{userInfo.name}}
    {{userInfo.age}}
    {{userCom}}
    <input type="text" v-model="userInfo.name"/>
    <input type="text" v-model="name"/>
  </div>
  <hr>
  <br>
  {{content.data}}
  <br>
  <input v-focus type="text" v-model="content.data">
  <Search></Search>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Search from './components/Search.vue'
  import {ref, reactive, toRefs, computed, provide} from "vue"

  export default {
    name: 'App',

    components: {
      HelloWorld, Search
    },
    setup() {
      let title = ref('title')
      let userInfo = reactive({name: 'one', age: 23})
      let userCom = computed(() => {
        return userInfo.name + 'hahah'
      })
      let content = reactive({
        data: '1212'
      })
      provide('content', content)
      return {
        title, userInfo, ...toRefs(userInfo), userCom, content
      }

    },
    data() {
      return {
        msg: 'test'
      }
    },
    methods: {}
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
