<script setup>
defineProps({
  cols: {
    type: Number,
    default: 3
  }
})
</script>

<template>
  <div class="numbered-cards" :class="`cols-${cols}`">
    <slot />
  </div>
</template>

<style scoped>
.numbered-cards {
  display: grid;
  gap: 1.5em;
  margin-top: 1em;
}

.numbered-cards.cols-1 {
  grid-template-columns: 1fr;
}

.numbered-cards.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.numbered-cards.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}
</style>
