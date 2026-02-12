<script setup>
defineProps({
  label: String,
  title: String,
  highlight: Boolean
})
</script>

<template>
  <div class="path-item" :class="{ 'path-highlight': highlight }">
    <div class="path-label">{{ label }}</div>
    <div v-if="title" class="path-title">{{ title }}</div>
    <div class="path-flow">
      <slot name="flow" />
    </div>
    <div v-if="$slots.result" class="path-result">
      <slot name="result" />
    </div>
  </div>
</template>

<style scoped>
.path-item {
  padding: 1.5em;
  background: var(--surface-card, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
  border-radius: 12px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.path-item.path-highlight {
  background: rgba(255, 107, 157, 0.08);
  border-color: rgba(255, 107, 157, 0.3);
}

.path-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55em;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted, rgba(255, 255, 255, 0.5));
  margin-bottom: 0.8em;
}

.path-highlight .path-label {
  color: var(--accent-pink, #FF6B9D);
}

.path-title {
  font-weight: 600;
  font-size: 1.05em;
  margin-bottom: 0.6em;
  color: var(--text-primary, #FFFFFF);
}

.path-flow {
  font-size: 0.78em;
  line-height: 1.65;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
}

.path-result {
  font-style: italic;
  font-size: 0.72em;
  color: var(--text-muted, rgba(255, 255, 255, 0.5));
  margin-top: 1em;
  padding-top: 0.8em;
  border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
}
</style>
