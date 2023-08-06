import { createApp } from 'vue'
import router from './permission'
import App from './App.vue'
import store from './store'
import ElementPlus from 'element-plus'
// 全局样式
import '@/pc/styles/reset.scss'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloablComponent from '@/pc/components'
const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(gloablComponent)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')
