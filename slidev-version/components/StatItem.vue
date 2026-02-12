<script setup>
defineProps({
  value: String,
  label: String
})
</script>

<template>
  <div class="stat-item">
    <span class="stat-value">{{ value }}</span>
    <span class="stat-label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-family: 'Inter', sans-serif;
  font-size: 3em;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  background: linear-gradient(135deg, var(--text-primary, #FFFFFF), var(--accent-cyan, #12D8FA));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.7em;
  font-weight: 400;
  color: var(--text-muted, rgba(255, 255, 255, 0.5));
  margin-top: 0.4em;
}
</style>
