import { createApp } from 'vue'
// import router from './permission'
import App from './App.vue'
import router from './routes/index'
import vant from 'vant'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
Locale.use('en-US', enUS)
import 'vant/lib/index.css'
// import store from './store'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
// import 'virtual:svg-icons-register'
const app = createApp(App)
app
  // .use(store)
  .use(router)
  // .use(gloablComponent)
  .use(vant)
  .mount('#app')
