<template>
  <div class="layout-container" :class="$settingStore.collapse ? 'collapse' : ''">
    <nav class="layout-navbar">
      <nav-bar></nav-bar>
    </nav>
    <div class="layout-menu">
      <el-scrollbar class="layout-menu-scrollbar">
        <el-menu
          :collapse-transition="false"
          :collapse="$settingStore.collapse"
          mode="vertical"
          router
          :default-active="activeMenu"
        >
          <Menu :menuList="menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <Main />
  </div>
</template>
<script setup lang="ts">
import NavBar from './nav.vue'
import Menu from './menu.vue'
import userStore from '@/store/user'
import settingStore from '@/store/setting'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Main from './main.vue'
const $userStore = userStore()
const $settingStore = settingStore()
const $route = useRoute()
const activeMenu = computed(() => {
  return $route.name as string
})
const menuList = $userStore.menuRoutes
</script>
<script lang="ts">
export default { name: 'Layout' }
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
  .layout-main,
  .layout-navbar,
  .layout-menu {
    transition: all 0.3s;
  }
  &.collapse {
    .layout-menu {
      width: 64px;
    }
    .layout-navbar {
      left: 64px;
    }
    .layout-main {
      width: calc(100vw - 64px);
      left: 64px;
    }
  }
}
</style>
