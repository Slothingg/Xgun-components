<template>
  <div id="app">
    <transition>
      <sideBar></sideBar>
    </transition>
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
  import sideBar from '@/components/item-list.vue'
  export default {
    name: 'App',
    components: {
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

  .title-1 {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }

  .codemirror {
    width: 100%;
    height: 100%;
  }
</style>
<style>
  @media screen and (max-width: 1200px) {
    #app {
      padding-left: 0;
      padding-top: 64px;
    }
  }
</style>
