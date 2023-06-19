<template>
  <div class="container">
    <div class="screen" ref="screen">
      <div class="top"><Top /></div>
      <div class="bottom">
        <div class="left">左侧</div>
        <div class="center">中间</div>
        <div class="right">右侧</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Top from './components/top.vue'
let screen = ref()
onMounted(() => {
  window.addEventListener('resize', countScale)
  countScale()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', countScale)
})
function countScale() {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}
</script>
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;
  .screen {
    width: 1920px;
    height: 1080px;
    background-color: red;
    position: fixed;
    left: 50%;
    top: 50%;
    transform-origin: left top;
    .top {
      height: 40px;
      background-color: skyblue;
    }
    .bottom {
      display: flex;
      .left,
      .right {
        flex: 1;
      }
      .center {
        flex: 2;
      }
    }
  }
}
</style>
