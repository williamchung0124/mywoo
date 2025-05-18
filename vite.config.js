/*
 * @Date: 2025-04-03 14:11:20
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-11 01:48:05
 * @FilePath: /mywoo/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from "@vitejs/plugin-legacy"
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["ie>=11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
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
  }
})
