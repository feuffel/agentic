<template>
  <div class="layer-stack">
    <slot />
  </div>
</template>

<style scoped>
.layer-stack {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 1em;
}
</style>
