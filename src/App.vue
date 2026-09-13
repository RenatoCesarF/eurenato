<script setup lang="ts">
   import Header from '@/components/Header.vue'
   import HeaderMenu from '@/components/HeaderMenu.vue'

   import AboutSection from '@/components/AboutSection.vue'
   import PaperStrip from '@/components/PaperStrip.vue'
   import BlogSection from '@/components/BlogSection.vue'
   import ProjectSection from '@/components/ProjectSection.vue'
</script>

<template>
  <Header/>
  <HeaderMenu/>

  <main class="noise-area">
    <content class="noise-area">
      <AboutSection/>
      <ProjectSection/>
      <div class="paper-strip-wrapper">
        <PaperStrip/>
      </div>
      <BlogSection/>

      <div class="paper-strip-wrapper">
        <PaperStrip/>
      </div>
      <div class="last-section">
      </div>
    </content>
  </main>
</template>

<style scoped>
.paper-strip-wrapper{
  position: relative;
  width: 100%;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  overflow: visible;
  isolation: isolate;
  background: var(--yellow-bg-color);
}

.noise-area {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  background: #eee8dc;
}

.noise-area::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;

  background-image: url("/assets/noise.png");
  background-repeat: repeat;
  background-size: 512px 512px;

  pointer-events: none;
  border-radius: inherit;

  mix-blend-mode: soft-light;
  opacity: 0.6;
}

.last-section{
  height: 50vh;
  background: var(--orange-bg-color)

}
</style>
