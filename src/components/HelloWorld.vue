<script setup lang="ts">
import { useUserStore } from '../store/user'
let store = useUserStore()
defineProps(['list'])
</script>

<template>
  <h1 v-bind="$attrs">{{ store.name }}</h1>
  <ul>
    <li
      :style="{ color: item.done ? 'green' : 'red' }"
      v-for="(item, index) of list"
      :key="item.id"
    >
      <slot :$row="item" :$index="index"></slot>
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
