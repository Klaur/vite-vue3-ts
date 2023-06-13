<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
let list = ref([
  { id: 1, name: '学习1', done: true },
  { id: 2, name: '游戏', done: true },
  { id: 3, name: '睡觉', done: false },
  { id: 3, name: '打豆豆', done: false }
])
</script>

<template>
  <HelloWorld :list="list" msg="Vite + Vue" lang="en">
    <template v-slot="{ $row, $index }">
      <div>{{ $row.name }} - {{ $index + 1 }}</div>
    </template>
  </HelloWorld>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
