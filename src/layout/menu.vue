<template>
  <template v-for="item of menuList" :key="item.path">
    <!-- 单路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta?.hidden" :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta?.icon" /></el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多路由且子路由为一个 -->
    <template v-else-if="item.children && item.children.length === 1">
      <el-menu-item v-if="!item.children[0].meta?.hidden" :index="item.children[0].path">
        <template #title>
          <el-icon><component :is="item.children[0].meta?.icon" /></el-icon>
          <span>{{ item.children[0].meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多路由有多个子路由 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1 && !item.meta?.hidden"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
    <Menu v-else :menuList="item.children"></Menu>
  </template>
</template>
<script setup lang="ts">
// import type { RouteRecordRaw } from 'vue-router'
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
  name: 'Menu'
}
</script>
<style scoped lang="scss"></style>
