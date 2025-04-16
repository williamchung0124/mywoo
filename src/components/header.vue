<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <div class="logo">
          <img src="@/assets/image/logo-mywoo-color.png" alt="MYWOO買屋網" class="logo" srcset="">
        </div>
        <ul class="nav-menu">
          <li v-for="(item, index) in navItems" :key="item.id" @click="onNavTo(item.id, item.path)"
            :class="{ 'active': index === activeId }">
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="right">
        <router-link to="/login" class="login">登入</router-link>
        <router-link to="/register">註冊</router-link>
        <router-link to="/">法拍專業課程</router-link>
        <router-link to="/">房產大小事</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
const route = useRoute();
const $router = useRouter()
const activeId = ref(null);
const navItems = ref([
  { id: 0, text: '新曝光', path: '/home' },
  { id: 1, text: '找好房', path: '/list' },
  { id: 2, text: '菁英群', path: '/' },
  { id: 3, text: '法拍專業課程', path: '/' },
  { id: 4, text: '房產大小事', path: '/' },
  { id: 5, text: '最新消息', path: '/' },
  { id: 6, text: '業務型象', path: '/' },
  { id: 7, text: '關於買屋網', path: '/' },
]);

onMounted(() => {
  activeId.value = navItems.value.findIndex(item => item.path === route.path)
})

const onNavTo = (id, path) => {
  activeId.value = id;
  $router.push(path)
}
</script>
<style lang="scss" scoped>
.header {
  background: #F5F6F7;
  // min-width: 1200px;

  .container {
    display: flex;
    justify-content: space-between;
    line-height: 36px;
  }

  .left {
    display: flex;

    ul {
      display: flex;
      gap: 20px;

      li {
        color: #333333;
        font-size: 14px;
        cursor: pointer;
      }

      li.active {
        color: #0566B3;
      }
    }

    .logo {
      width: 61px;
      height: 20px;
      margin-right: 45px;
      vertical-align: sub;
    }
  }

  .right {
    .login {
      padding-right: 12px;
      border-right: 1px solid #C8C8C8;
      margin-right: 12px;
    }

    a {
      color: #333333;
      font-size: 14px;
      margin-right: 20px;
    }
  }
}
</style>