<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentLayout } = useNav()

// Hide footer on iframe-only slides
const isIframeSlide = computed(() => currentLayout.value === 'iframe')
</script>

<template>
  <div v-if="!isIframeSlide" class="slide-footer">
    <span class="footer-left">2026 Industrial Leadership Meeting</span>
    <span class="footer-right">March 11, 2026</span>
  </div>
</template>

<style scoped>
.slide-footer {
  position: absolute;
  bottom: 5%;
  left: 7%;
  right: 7%;
  display: flex;
  justify-content: space-between;
  font-family: 'Fira Code', monospace;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  pointer-events: none;
}

/* Dark slide footer */
:global(.dark-slide) .slide-footer,
:global([background="black"]) .slide-footer {
  color: rgba(255, 255, 255, 0.5);
}
</style>
