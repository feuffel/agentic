<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useNav } from '@slidev/client'

const props = defineProps({
  src: { type: String, required: true },
  type: { type: String, default: 'audio/mp4' },
  slide: { type: Number, required: true },
})

const { currentPage } = useNav()
const audioRef = ref(null)

function tryPlay() {
  const el = audioRef.value
  if (!el) return
  el.currentTime = 0
  el.play().catch(() => {})
}

function pause() {
  const el = audioRef.value
  if (!el) return
  el.pause()
}

watch(currentPage, (page) => {
  if (page === props.slide) {
    tryPlay()
  } else {
    pause()
  }
})

onMounted(() => {
  if (currentPage.value === props.slide) {
    tryPlay()
  }
})

onUnmounted(() => {
  pause()
})
</script>

<template>
  <audio ref="audioRef">
    <source :src="src" :type="type" />
  </audio>
</template>
