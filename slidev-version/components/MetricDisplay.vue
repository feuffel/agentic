<script setup>
defineProps({
  label: String,
  value: String,
  description: String
})
</script>

<template>
  <div class="metric-display">
    <span class="metric-label">{{ label }}</span>
    <span class="metric-value">{{ value }}</span>
    <p v-if="description" class="metric-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.metric-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.metric-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55em;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-pink, #FF6B9D);
  margin-bottom: 0.5em;
}

.metric-value {
  font-family: 'Inter', sans-serif;
  font-size: 6em;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0.1em 0;
  background: linear-gradient(135deg, var(--text-primary, #FFFFFF) 0%, var(--accent-cyan, #12D8FA) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.metric-description {
  font-size: 0.9em;
  font-weight: 400;
  max-width: 600px;
  line-height: 1.6;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
}
</style>
