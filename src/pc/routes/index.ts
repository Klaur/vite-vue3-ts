import { createRouter as createVueRouter, createWebHistory } from 'vue-router'
import { constainRoute } from './routes'
const router: any = createRouter()
function createRouter() {
  return createVueRouter({
    history: createWebHistory(),
    routes: [...constainRoute],
    scrollBehavior() {
      return { left: 0, top: 0 }
    }
  })
}
export function resetRouter() {
  const newRouter: any = createRouter()
  router.matcher = newRouter.matcher // the relevant part
}
export default router
