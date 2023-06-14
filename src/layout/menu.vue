<template>
  <template v-for="item of menuList" :key="item.path">
    <!-- 单路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta?.hidden" :index="item.path">
        <template #title>
          <span>图标&nbsp;</span>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多路由且子路由为一个 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item v-if="!item.children[0].meta?.hidden" :index="item.children[0].path">
        <template #title>
          <span>图标&nbsp;</span>
          <span>{{ item.children[0].meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多路由有多个子路由 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1 && !item.meta?.hidden"
      :index="item.path"
    >
      <template #title>
        <span>{{ item.meta?.title }}</span>
      </template>
      <Menu :menulist="item.children" />
    </el-sub-menu>
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
