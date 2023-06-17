<template>
  <router-view class="layout-main" v-slot="{ Component }">
    <transition name="fade">
      <!-- layout 渲染一级路由的子组件 -->
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import settingStore from '@/store/setting'
import { watch, ref, nextTick } from 'vue'
const $store = settingStore()
let flag = ref(true)
watch(
  () => {
    return $store.refresh
  },
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>
<script lang="ts">
export default { name: 'LayoutMain' }
</script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
