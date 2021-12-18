<template>
  <Table :columns="columns" :data="data"></Table>
</template>

<script>
  export default{
    data(){
      return{
        columns: [{
          title: '事件名',
          key: 'events'
        },{
          title: '说明',
          key: 'instruction'
        },{
          title: '返回值',
          key: 'ret'
        }]
      }
    },
    props:{
      data:{
        type:Array
      }
    }
  }
</script>

<style>
</style>
