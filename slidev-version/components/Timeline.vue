<template>
  <div class="timeline">
    <slot />
  </div>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 1.2em;
  border-left: 2px solid var(--accent-purple, #C471ED);
  padding-left: 1.8em;
}
</style>
