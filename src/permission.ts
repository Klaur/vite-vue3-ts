import router from '@/routes'
// @ts-ignore
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import useUserStrore from '@/store/user'
import pinia from '@/store'
const userStrore = useUserStrore(pinia)
nprogress.configure({ showSpinner: false })
router.beforeEach(async (to: any, next: any) => {
  console.log(router)
  const token = userStrore.token
  const username = userStrore.username
  nprogress.start()
  if (token) {
    if (username) {
      if (to.path === '/login') {
        next('/')
      } else {
        next()
      }
    } else {
      try {
        await userStrore.getUserInfo()
        to.path === '/login' ? next('/') : next()
      } catch (error) {
        // 获取用户信息失败
        to.path === '/login' ? next() : next('/login')
      }
    }
  } else {
    to.path === '/login' ? next() : next('/login')
  }
})
router.afterEach(() => {
  nprogress.done()
})
export default router
