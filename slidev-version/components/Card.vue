<script setup>
defineProps({
  number: String,
  title: String
})
</script>

<template>
  <div class="numbered-card">
    <div class="card-number">{{ number }}</div>
    <div class="card-title">{{ title }}</div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.numbered-card {
  position: relative;
  padding: 1.2em;
  background: var(--surface-card, rgba(255, 255, 255, 0.05));
  border-radius: 12px;
  border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
  transition: background 0.2s ease, border-color 0.2s ease;
}

.numbered-card:hover {
  background: var(--surface-card-hover, rgba(255, 255, 255, 0.08));
  border-color: rgba(255, 255, 255, 0.15);
}

.card-number {
  font-family: 'Inter', sans-serif;
  font-size: 1.8em;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-pink, #FF6B9D), var(--accent-purple, #C471ED));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.2em;
  line-height: 1;
}

.card-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6em;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.8em;
  color: var(--text-primary, #FFFFFF);
}

.card-body {
  font-size: 0.72em;
  font-weight: 400;
  line-height: 1.55;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
}
</style>
