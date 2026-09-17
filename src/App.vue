<script setup lang="ts">
import Header from '@/components/Header.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

import AboutSection from '@/components/AboutSection.vue'
import PaperStrip from '@/components/PaperStrip.vue'
import BlogSection from '@/components/BlogSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
</script>

<template>
  <Header />
  <HeaderMenu />

  <main class="noise-area">
    <div class="blue-area textured-section">
      <AboutSection class="section-layer" />

      <ProjectSection class="section-layer" />
    </div>

    <div class="paper-strip-wrapper">
      <PaperStrip />
    </div>

    <BlogSection class="section-layer" />

    <div class="paper-strip-wrapper paper-strip-wrapper--last">
      <PaperStrip />
    </div>

    <div class="last-section textured-section"></div>
  </main>
</template>

<style scoped>
/* ==================================================
   Estrutura geral
================================================== */

.noise-area {
  position: relative;
  isolation: isolate;

  min-height: 100vh;

  background-color: #eee8dc;
}

/* ==================================================
   Seções com papel
================================================== */

.textured-section {
  position: relative;
  isolation: isolate;

  background-color: var(--section-background, #eee8dc);

  background-image: url('/assets/paper-background.png');
  background-position: top center;
  background-repeat: no-repeat repeat;
  background-size: 100% auto;

  background-blend-mode: multiply;
}

/*
 * O noise agora pertence ao fundo da seção.
 * Ele não fica mais sobre a página inteira.
 */
.textured-section::after {
  content: '';

  position: absolute;
  inset: 0;
  z-index: 0;

  pointer-events: none;

  background-image: url('/assets/noise.png');
  background-position: top left;
  background-repeat: repeat;
  background-size: 512px 512px;

  border-radius: inherit;

  mix-blend-mode: soft-light;
  opacity: 0.4;
}

/* ==================================================
   Área azul
================================================== */

.blue-area {
  --section-background: var(--blue-bg-color);

  position: relative;
  z-index: 0;

  width: 100%;

  overflow: visible;
  isolation: isolate;
}

.section-layer {
  position: relative;
  z-index: 1;
}

/* ==================================================
   PaperStrip
================================================== */

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

/*
 * O separador entre Blog e LastSection
 * permanece acima da seção seguinte.
 */
.paper-strip-wrapper--last {
  z-index: 100;

  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

/* ==================================================
   Última seção
================================================== */

.last-section {
  --section-background: var(--orange-bg-color);

  position: relative;
  z-index: 2;

  height: 50vh;

  overflow: visible;
  isolation: isolate;
}
</style>
