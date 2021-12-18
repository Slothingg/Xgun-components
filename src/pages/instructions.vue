<template>
  <flexBox class="box">
    <div class="title">
      项目介绍
    </div>
    <titleSub>
      前言
    </titleSub>
    <div class="text">
      在工作中时长发现很多重复设计的地方，为了更好的工作（moyu）搭建此项目，制作和收集各种集成度高一点的组件提供大家使用，同时因为本人也是一名前端小白，如有更好的建议请在github给我留言，感谢
    </div>
    <titleSub>
      项目地址
    </titleSub>
    <div class="text address">
      www.github.com
    </div>
  </flexBox>
</template>

<script>
  export default{
    name:'ins',
    data(){
      return{

      }
    },
    components:{
    }
  }
</script>

<style scoped="scoped">
  .box .title{
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  .box .text{
    width: 90%;
    min-height: 100px;
    background-color: #f5f5f5;
    padding: 20px;
    padding-left: 10px;
  }
  .box .address{
    min-height: auto !important;
    padding: 10px;
  }
</style>
