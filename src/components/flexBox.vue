<template>
  <div class="box">
    <slot></slot>
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
    justify-content: flex-start;
    padding: 10px;
    overflow: hidden;
    font-size: 8px;
  }
</style>
