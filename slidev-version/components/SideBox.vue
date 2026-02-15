<script setup>
defineProps({
  variant: {
    type: String,
    default: 'glass',
    validator: (v) => ['glass', 'black'].includes(v)
  }
})
</script>

<template>
  <div class="side-box" :class="`side-${variant}`">
    <slot />
  </div>
</template>

<style scoped>
.side-box {
  display: flex;
  flex-direction: column;
  padding: 8%;
  border-radius: 12px;
}

.side-glass {
  background: var(--surface-card, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
  color: var(--text-primary, #FFFFFF);
  justify-content: center;
}

.side-black {
  background: var(--bg-dark, #0D0D0D);
  border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
  color: var(--text-primary, #FFFFFF);
  justify-content: center;
  text-align: center;
}

/* Typography inside glass box */
.side-glass :deep(p) {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1.5em;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
}

.side-glass :deep(.side-caption) {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5em;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted, rgba(255, 255, 255, 0.5));
  text-align: center;
}

/* Typography inside black box */
.side-black :deep(.side-label) {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55em;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-pink, #FF6B9D);
  margin-bottom: 0.8em;
}

.side-black :deep(.side-stat) {
  font-family: 'Inter', sans-serif;
  font-size: 5.5em;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.9;
  background: linear-gradient(135deg, var(--text-primary, #FFFFFF), var(--accent-cyan, #12D8FA));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.15em 0 0.25em 0;
}

.side-black :deep(.side-subtitle) {
  font-family: 'Inter', sans-serif;
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.35;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
  margin-top: 0.3em;
}
</style>
