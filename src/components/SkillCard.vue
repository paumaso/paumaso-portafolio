<template>
  <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-3">
    <Icon :icon="icon" class="w-12 h-12 text-primary-dark" />
    <span class="font-semibold">{{ name }}</span>
    <div class="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
      <div ref="barRef" class="h-3 bg-primary rounded-full transition-all duration-1000" :style="{ width: barWidth + '%' }"></div>
    </div>
    <span class="text-sm text-gray-600 mt-1">{{ barWidth }}%</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  name: String,
  icon: String,
  level: Number
})

const barWidth = ref(0)
const barRef = ref(null)

const animateBar = () => {
  if (!barRef.value) return
  const rect = barRef.value.getBoundingClientRect()
  if (rect.top < window.innerHeight) {
    barWidth.value = props.level
    window.removeEventListener('scroll', animateBar)
  }
}

onMounted(() => {
  window.addEventListener('scroll', animateBar)
  animateBar()
})
</script>