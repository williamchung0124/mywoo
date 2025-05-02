/*
 * @Date: 2025-04-03 14:11:20
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-02 19:42:46
 * @FilePath: /mywoo/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入 Bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 Bootstrap JavaScript
import 'bootstrap';

import './assets/scss/index.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')
