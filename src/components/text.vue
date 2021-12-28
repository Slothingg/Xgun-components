<template>
  <div class="text">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .text{
    width: 90%;
    min-height: 50px;
    background-color: #f5f5f5;
    padding: 20px;
    padding-left: 10px;
  }
  @media screen and (max-width: 750px) {
    .text{
      width: 100%;
    }
  }
</style>
