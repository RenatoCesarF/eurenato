<script setup lang="ts"></script>

<template>
  <div class="paper-strip-layer" aria-hidden="true">
    <img
      class="paper-strip"
      src="/assets/cuttings/paper-strip.png"
      alt=""
    />
  </div>
</template>

<style scoped>
.paper-strip-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.paper-strip {
  position: absolute;
  display: block;
  z-index: 1;

  top: 50%;
  left: -8rem;

  width: clamp(1700px, 170vw, 2600px);
  max-width: none;
  height: auto;

  transform: translateY(-50%);
}
</style>
