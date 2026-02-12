<script setup>
defineProps({
  date: String,
  title: String
})
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-date">{{ date }}</div>
    <div class="timeline-title">{{ title }}</div>
    <div class="timeline-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  padding-bottom: 1.4em;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.95em;
  top: 0.4em;
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, var(--accent-pink, #FF6B9D), var(--accent-purple, #C471ED));
  border-radius: 50%;
  box-shadow: 0 0 12px var(--accent-pink, #FF6B9D);
}

.timeline-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6em;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-pink, #FF6B9D);
  margin-bottom: 0.4em;
}

.timeline-title {
  font-weight: 600;
  font-size: 0.95em;
  margin-bottom: 0.25em;
  color: var(--text-primary, #FFFFFF);
}

.timeline-body {
  font-size: 0.78em;
  font-weight: 400;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
}
</style>
