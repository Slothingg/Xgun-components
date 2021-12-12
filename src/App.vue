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
</style>
