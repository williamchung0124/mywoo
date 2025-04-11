import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  // 打包相关配置
  build: {
    outDir: 'dist',          // 指定打包输出目录
    assetsDir: 'static',     // 静态资源目录 (js, css, img...)
    sourcemap: false,        // 关闭 sourcemap，提高打包速度（可选）
  },

  // 开发服务器配置
  server: {
    port: 3000,              // 设置本地开发端口
    open: true,              // 自动打开浏览器
    proxy: {
      // 将 /api 的请求代理到目标地址
      '/api': {
        target: 'http://localhost:5000', // 你后台接口的地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 去掉请求前缀
      }
    }
  }
})
