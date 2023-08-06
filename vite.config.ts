import { Local } from 'vant'
import { UserConfigExport, ConfigEnv, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd())
  return {
    // root: './src/',
    base: '/',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, './src/pc/main.ts'),
          mobile: path.resolve(__dirname, './src/mobile/main.ts')
        }
      }
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // javascriptEnabled: true,
          // additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },
    server: {
      // mode: 'history',
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite(path) {
            return path.replace(/^\/api/, '')
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve('./src/'),
        pc: path.resolve('./src/pc/'),
        moblie: path.resolve('./src/mobile/')
      }
    }
  }
}
