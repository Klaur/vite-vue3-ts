<template>
  <div>
    <el-button type="primary" size="default" @click="handleRefresh">刷新</el-button>
    <screen />
  </div>
</template>
<script setup lang="ts">
import screen from '@/components/fullScreen/index.vue'
import settingStore from '@/store/setting'
const $store = settingStore()
function handleRefresh() {
  $store.refresh = !$store.refresh
}
</script>
<script lang="ts">
export default {
  name: 'LayoutNav'
}
</script>
<style scoped lang="scss"></style>
