<template>
  <div class="layout-container">
    <nav class="layout-navbar"></nav>
    <div class="layout-menu">
      <el-scrollbar class="layout-menu-scrollbar">
        <el-menu mode="vertical" router :default-active="activeMenu">
          <Menu :menuList="menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <router-view class="layout-main"></router-view>
  </div>
</template>
<script setup lang="ts">
import Menu from './menu.vue'
import userStore from '@/store/user'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const $store = userStore()
const $route = useRoute()
const activeMenu = computed(() => {
  return $route.name as string
})
let menuList = $store.menuRoutes
</script>
<style scoped lang="scss">
.layout-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  .layout-menu {
    width: 256px;
    background-color: aquamarine;
    display: flex;
    .layout-menu-scrollbar {
      flex: 1;

      .el-menu {
        border-right: none;
      }
    }
  }
  .layout-navbar {
    position: fixed;
    top: 0;
    height: 60px;
    left: 256px;
    right: 0;
    background-color: aqua;
    z-index: 1;
  }
  .layout-main {
    position: absolute;
    height: calc(100vh - 60px);
    width: calc(100vw - 256px);
    top: 60px;
    left: 256px;
    padding: 15px;
    box-sizing: border-box;
    overflow: auto;
  }
}
</style>
