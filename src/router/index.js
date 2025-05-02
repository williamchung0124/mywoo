/*
 * @Date: 2025-04-11 15:45:37
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-02 17:36:49
 * @FilePath: /mywoo/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register/index.vue')
  },
  {
    path: '/',
    redirect: { name: 'home' },
    component: () => import('@/views/Main/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Index/index.vue')
      },
      {
        path: '/list',
        name: 'list',
        component: () => import('../views/List/index.vue')
      },
      {
        path: '/list/content/:id',
        name: 'listContent',
        component: () => import('../views/ListDetail/index.vue')
      }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
