import { defineStore } from 'pinia'
import { ref } from 'vue'
const settingStore = defineStore('setting', () => {
  const refresh = ref(false)
  const collapse = ref(false)
  return {
    refresh,
    collapse
  }
})
export default settingStore
