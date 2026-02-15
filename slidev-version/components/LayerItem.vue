<script setup>
defineProps({
  label: String,
  title: String,
  items: String,
  desc: String,
  highlight: Boolean,
  dark: Boolean
})
</script>

<template>
  <div class="layer-item" :class="{ 'layer-highlight': highlight, 'layer-dark': dark }">
    <div class="layer-label">{{ label }}</div>
    <div class="layer-title">{{ title }}</div>
    <div class="layer-items">{{ items }}</div>
    <div class="layer-desc">{{ desc }}</div>
  </div>
</template>

<style scoped>
.layer-item {
  padding: 0.7em 1.2em;
  background: var(--surface-card, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
  border-radius: 10px;
  margin-bottom: 0.5em;
}

.layer-item:last-child {
  margin-bottom: 0;
}

.layer-item.layer-highlight {
  background: rgba(255, 107, 157, 0.08);
  border-color: rgba(255, 107, 157, 0.3);
}

.layer-item.layer-dark {
  background: var(--bg-dark, #0D0D0D);
  color: var(--text-primary, #FFFFFF);
  border-color: var(--border-subtle, rgba(255, 255, 255, 0.1));
}

.layer-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5em;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted, rgba(255, 255, 255, 0.5));
  margin-bottom: 0.3em;
}

.layer-highlight .layer-label {
  color: var(--accent-pink, #FF6B9D);
}

.layer-title {
  font-weight: 600;
  font-size: 0.9em;
  margin-bottom: 0.25em;
  color: var(--text-primary, #FFFFFF);
}

.layer-items {
  font-size: 0.72em;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
}

.layer-desc {
  font-size: 0.68em;
  font-style: italic;
  color: var(--text-muted, rgba(255, 255, 255, 0.5));
  margin-top: 0.35em;
}
</style>
