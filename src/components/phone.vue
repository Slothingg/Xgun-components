<template>
  <div>
    <div class="xg-phone">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .xg-phone{
    width: 180px;
    height: 300px;
    background: url(../../static/iPhone13.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 25px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .content::-webkit-scrollbar{
    display:none
  }
</style>
