<template>
  <div>
    <collapse />
    <el-button type="primary" size="default" @click="handleRefresh">刷新</el-button>
    <screen />
    {{ $userStore.username }}
    <el-button type="primary" size="default" @click="logout">退出</el-button>
  </div>
</template>
<script setup lang="ts">
import collapse from '@/components/collapse/index.vue'
import screen from '@/components/fullScreen/index.vue'
import settingStore from '@/store/setting'
import userStore from '@/store/user'
import { useRouter } from 'vue-router'
const $router = useRouter()
const $userStore = userStore()
const $store = settingStore()
function handleRefresh() {
  $store.refresh = !$store.refresh
}
async function logout() {
  await $userStore.logout()
  $router.push('/login')
}
</script>
<script lang="ts">
export default {
  name: 'LayoutNav'
}
</script>
<style scoped lang="scss"></style>
