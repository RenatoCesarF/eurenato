<script setup lang="ts">
</script>

<template>
  <div class='hero'>
    <img class='paper-strip' src="/assets/cuttings/paper-strip.png" alt="" />
  </div>
</template>

<style scoped>

.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100px;
}

.paper-strip {
  position: absolute;
  left: -15svw;
  max-width: none;
  height: auto;
  width: clamp(900px, 130vw, 200vw);
}

</style>
