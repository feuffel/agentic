<template>
  <div class="path-compare">
    <slot />
  </div>
</template>

<style scoped>
.path-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  margin-top: 1em;
}
</style>
