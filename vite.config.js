/*
 * @Date: 2025-04-03 14:11:20
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-18 19:30:26
 * @FilePath: /mywoo/vite.config.js
 */
// 添加环境变量支持

// 加载环境变量文件
// dotenv.config()
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from "@vitejs/plugin-legacy"
import path from 'path'
// import dotenv from 'dotenv'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './',
  build: {
    outDir: 'dist', //指定打包输出路径
    assetsDir: 'assets', //指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: process.env.NODE_ENV === 'production' ? false : true, //是否构建source map 文件
    emptyOutDir: true,
    terserOptions: {
      compress: {
        drop_console: true, // 删除 console
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },

  server: {
    port: 4000,              // 设置本地开发端口
    open: true,              // 自动打开浏览器
    proxy: {
      // 将 /api 的请求代理到目标地址
      '/api': {
        target: 'http://localhost:5000', // 你后台接口的地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 去掉请求前缀
      }
    }
  },

  // 添加 preview 配置以兼容阿里云部署
  preview: {
    port: 5000, // 预览时的端口
    strictPort: true, // 如果端口被占用则报错
    host: '0.0.0.0' // 允许外部访问
  }
})
