<template>
  <el-icon @click="handleClick">
    <component :is="collapse"></component>
  </el-icon>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import settingStore from '@/pc/store/setting'
const $store = settingStore()
const collapse = computed(() => {
  return $store.collapse ? 'Expand' : 'Fold'
})
function handleClick() {
  $store.$patch({
    collapse: !$store.collapse
  })
}
</script>
<style scoped lang="scss"></style>
