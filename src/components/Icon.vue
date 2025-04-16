<template>
  <i ref="iconRef" class="svg-icon" />
</template>

<script setup>
import { ref, watchEffect, onMounted, nextTick } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})

const svgContent = ref('')
const iconRef = ref(null)

watchEffect(async () => {
  try {
    const svg = await import(`@/assets/image/icons/${props.name}.svg?raw`)
    svgContent.value = svg.default
    await nextTick()
    injectSvg()
  } catch (err) {
    console.warn(`Icon not found: ${props.name}`)
    if (iconRef.value) iconRef.value.innerHTML = ''
  }
})

function injectSvg() {
  if (!iconRef.value) return
  iconRef.value.innerHTML = svgContent.value
  const svg = iconRef.value.querySelector('svg')
  if (svg) {
    svg.setAttribute('width', props.size)
    svg.setAttribute('height', props.size)
    svg.setAttribute('fill', props.color)
  }
}
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
