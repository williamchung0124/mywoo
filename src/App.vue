<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

const DESIGN_WIDTH = 750
const BASE_FONT_SIZE = 100
const RESIZE_DEBOUNCE_DELAY = 300

// 设备检测工具函数
const isMobile = () => {
  return /Android|webOS|iPhone|iPod|BlackBerry|iPad|Mobile/i.test(navigator.userAgent)
}

// 响应式字体大小设置
const setHtmlFontSize = () => {
  const shouldApplyMobileStyle = isMobile()

  if (shouldApplyMobileStyle) {
    const scale = document.documentElement.clientWidth / DESIGN_WIDTH
    document.documentElement.style.fontSize = `${BASE_FONT_SIZE * scale}px`
  } else {
    // 重置为非移动端样式
    document.documentElement.style.fontSize = ''
  }
}

// 优化的防抖函数
const debounce = (fn, delay) => {
  let timerId = null
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => fn(...args), delay)
  }
}

// 使用ref跟踪监听器以便正确移除
const resizeListener = ref(null)

onMounted(() => {
  // 初始设置
  setHtmlFontSize()

  // 创建防抖后的监听器
  const debouncedHandler = debounce(setHtmlFontSize, RESIZE_DEBOUNCE_DELAY)
  resizeListener.value = debouncedHandler

  // 添加监听
  window.addEventListener('resize', debouncedHandler)
})

onUnmounted(() => {
  // 确保正确移除监听器
  if (resizeListener.value) {
    window.removeEventListener('resize', resizeListener.value)
  }
})
</script>