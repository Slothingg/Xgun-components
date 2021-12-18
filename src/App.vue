<template>
  <div id="app">
    <sideBar></sideBar>
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
  import sideBar from '@/components/item-list.vue'
  export default {
    name: 'App',
    components:{
      sideBar
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    padding-left: 120px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .title-1{
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  .codemirror{
    width: 100%;
    height: 100%;
  }
</style>
