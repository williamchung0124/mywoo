<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <Footer />
  </el-container>
</template>
<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
</script>

<style scoped lang="scss"></style>