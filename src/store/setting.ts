import { defineStore } from 'pinia'
import { ref } from 'vue'
let settingStore = defineStore('setting', () => {
  let refresh = ref(false)
  let collapse = ref(false)
  return {
    refresh,
    collapse
  }
})
export default settingStore
