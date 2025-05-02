<!--
 * @Date: 2025-04-03 14:11:20
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-02 19:38:07
 * @FilePath: /mywoo/src/App.vue
-->
<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

const DESIGN_WIDTH = 750
const BASE_FONT_SIZE = 100
const RESIZE_DEBOUNCE_DELAY = 300

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
    document.documentElement.style.fontSize = ''
  }
}

const debounce = (fn, delay) => {
  let timerId = null
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => fn(...args), delay)
  }
}

const resizeListener = ref(null)

onMounted(() => {
  setHtmlFontSize()

  const debouncedHandler = debounce(setHtmlFontSize, RESIZE_DEBOUNCE_DELAY)
  resizeListener.value = debouncedHandler

  window.addEventListener('resize', debouncedHandler)
})

onUnmounted(() => {
  if (resizeListener.value) {
    window.removeEventListener('resize', resizeListener.value)
  }
})
</script>