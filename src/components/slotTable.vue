<template>
  <Table :columns="columns" :data="data"></Table>
</template>

<script>
  export default{
    data(){
      return{
        columns: [{
          title: 'name',
          key: 'name'
        },{
          title: '说明',
          key: 'instruction'
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
