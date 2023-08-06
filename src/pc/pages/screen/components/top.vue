<template>
  <div class="top">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.top {
  display: flex;
  .left,
  .right {
    flex: 1;
  }
  .center {
    flex: 2;
  }
}
</style>
