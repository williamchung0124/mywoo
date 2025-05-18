/*
 * @Date: 2025-04-03 14:11:20
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-10 23:54:21
 * @FilePath: /mywoo/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './utils/resize'
import './assets/scss/index.scss'
import Icon from '@/components/Icon.vue'; // 导入 Icon 组件

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('Icon', Icon);
app.use(router)
app.use(ElementPlus)


app.mount('#app');