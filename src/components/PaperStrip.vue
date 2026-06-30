<script setup lang="ts"></script>

<template>
  <div class="paper-strip-layer" aria-hidden="true">
    <img class="paper-strip" src="/assets/cuttings/paper-strip.png" alt="" />
  </div>
</template>

<style scoped>
.paper-strip-layer {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: visible;
}

.paper-strip {
  position: absolute;
  top: 30%;
  left: -8rem;
  transform: translateY(-50%);

  width: clamp(1400px, 150vw, 2200px);
  max-width: none;
  height: auto;
  z-index: 1000;
}
</style>
