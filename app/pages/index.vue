<script setup lang="ts">
import Header from '@/components/Header.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

import AboutSection from '@/components/AboutSection.vue'
import PaperStrip from '@/components/PaperStrip.vue'
import BlogSection from '@/components/BlogSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'

definePageMeta({
  keepalive: true,
  pageTransition: false,
  layoutTransition: false,
  viewTransition: true,
})

</script>

<template>
  <Header />
  <HeaderMenu />

  <main>
    <div class="blue-area textured-section">
      <AboutSection class="section-layer" />

      <ProjectSection class="section-layer" />
    </div>

    <div class="paper-strip-wrapper">
      <PaperStrip />
    </div>

    <div class="yellow-area textured-section">
      <BlogSection class="section-layer" />
    </div>

    <div class="paper-strip-wrapper paper-strip-wrapper--last">
      <PaperStrip />
    </div>

    <div class="last-section textured-section"></div>
  </main>
</template>

<style scoped>

/* ==================================================
   SISTEMA DE TEXTURAS
================================================== */

.textured-section {
  position: relative;
  isolation: isolate;

  background-color: var(--texture-color);
}

/* Textura de papel */
.textured-section::before {
  content: '';

  position: absolute;
  inset: 0;
  z-index: 0;

  pointer-events: none;

  background-color: transparent;
  background-image: url('/assets/paper-background.png');
  background-position: top center;
  background-repeat: repeat-y;
  background-size: 100% auto;

  mix-blend-mode: multiply;
}

/* Noise */
.textured-section::after {
  content: '';

  position: absolute;
  inset: 0;
  z-index: 1;

  pointer-events: none;

  background-color: transparent;
  background-image: url('/assets/noise.png');
  background-position: top left;
  background-repeat: repeat;
  background-size: 512px 512px;

  mix-blend-mode: soft-light;
  opacity: 0.4;
}

/* ==================================================
   CORES DAS SEÇÕES
================================================== */

.blue-area {
  --texture-color: var(--blue-bg-color);

  position: relative;
  width: 100%;
  z-index: 1;

  overflow-x: clip;
}

.yellow-area {
  --texture-color: var(--yellow-bg-color);

  position: relative;
  width: 100%;
  z-index: 1;

  overflow-x: clip;
}

.last-section {
  --texture-color: var(--orange-bg-color);

  position: relative;
  z-index: 2;

  height: 50vh;
  overflow: visible;
}

/* Conteúdo acima das texturas */
.section-layer {
  position: relative;
  z-index: 2;
}

.paper-strip-wrapper {
  position: relative;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 50px;

  overflow: visible;
  isolation: isolate;
  pointer-events: none;
}

.paper-strip-wrapper--last {
  z-index: 100;
}

</style>
