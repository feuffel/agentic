<script setup>
import { watch, onMounted, onUnmounted } from 'vue'
import { useNav } from '@slidev/client'

const props = defineProps({
  src: { type: String, required: true },
  slide: { type: Number, required: true },
})

const { currentPage } = useNav()

// Use Audio constructor — no DOM element needed, avoids template rendering issues
let audio = null
let pendingPlay = false

function ensureAudio() {
  if (!audio) {
    audio = new Audio(props.src)
    audio.preload = 'auto'
  }
  return audio
}

function tryPlay() {
  const el = ensureAudio()
  el.currentTime = 0
  const p = el.play()
  if (p && p.catch) {
    p.catch((err) => {
      if (err.name === 'NotAllowedError') {
        console.warn('[SlideAudio] Autoplay blocked on slide', props.slide, '— will retry on next interaction')
        pendingPlay = true
      } else {
        console.error('[SlideAudio] Playback error:', err)
      }
    })
  }
}

function stop() {
  if (!audio) return
  audio.pause()
  audio.currentTime = 0
}

function onInteraction() {
  if (pendingPlay && currentPage.value === props.slide) {
    pendingPlay = false
    tryPlay()
  }
}

watch(currentPage, (page) => {
  if (page === props.slide) {
    tryPlay()
  } else {
    stop()
  }
})

onMounted(() => {
  ensureAudio()
  document.addEventListener('click', onInteraction)
  document.addEventListener('keydown', onInteraction)
  if (currentPage.value === props.slide) {
    tryPlay()
  }
})

onUnmounted(() => {
  document.removeEventListener('click', onInteraction)
  document.removeEventListener('keydown', onInteraction)
  if (audio) {
    audio.pause()
    audio.src = ''
    audio = null
  }
  pendingPlay = false
})
</script>

<template>
  <span style="display:none" />
</template>
