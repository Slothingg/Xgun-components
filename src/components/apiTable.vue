<template>
  <Table :columns="columns" :data="data"></Table>
</template>

<script>
  export default{
    data(){
      return{
        columns: [{
          title: '属性',
          key: 'porps'
        },{
          title: '说明',
          key: 'instruction'
        },{
          title: '类型',
          key: 'type'
        },{
          title: '默认值',
          key: 'defalut'
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
