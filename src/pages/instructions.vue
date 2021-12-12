<template>
  <div class="box">
    <div class="title">
      项目介绍
    </div>
    <div class="title-sub">
      前言
    </div>
    <div class="text">
      在工作中时长发现很多重复设计的地方，为了更好的工作（moyu）搭建此项目，制作和收集各种集成度高一点的组件提供大家使用，同时因为本人也是一名前端小白，如有更好的建议请在github给我留言，感谢
    </div>
    <div class="title-sub">
      项目地址
    </div>
    <div class="text address">
      www.github.com
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    min-height: 900px;
    display: flex;
    flex-direction: column;
    padding: 10px;

  }
  .box .title{
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  .box .title-sub{
    margin: 10px 0;
    width: 100%;
    padding: 0px 20px;
    margin-left: 10px;
    border-left: solid 1px #2d8cf0;
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
