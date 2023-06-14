import { createRouter, createWebHistory } from 'vue-router'
import { constainRoute } from './routes'
let router = createRouter({
  history: createWebHistory(),
  routes: [...constainRoute],
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router
