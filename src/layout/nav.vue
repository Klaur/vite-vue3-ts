<template>
  <div>
    <el-button type="primary" size="default" @click="handleRefresh">刷新</el-button>
  </div>
</template>
<script setup lang="ts">
import settingStore from '@/store/setting'
const $store = settingStore()
function handleRefresh() {
  $store.refresh = !$store.refresh
}
</script>
<script lang="ts">
export default {
  name: 'Nav'
}
</script>
<style scoped lang="scss"></style>
