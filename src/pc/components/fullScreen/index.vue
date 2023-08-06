<template>
  <el-icon @click="handleClick"><FullScreen /></el-icon>
</template>
<script setup lang="ts">
function handleClick() {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>
<style scoped lang="scss"></style>
