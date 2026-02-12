<template>
  <div class="side-by-side">
    <slot />
  </div>
</template>

<style scoped>
.side-by-side {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  position: absolute;
  top: 7%;
  left: 7%;
  right: 7%;
  bottom: 12%;
  border-radius: 16px;
  overflow: hidden;
}
</style>
