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

  <main>
    <content>
      <AboutSection/>
      <ProjectSection/>
      <div class="paper-strip-wrapper">
        <PaperStrip/>
      </div>
      <BlogSection/>

      <div class="paper-strip-wrapper">
        <PaperStrip/>
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
  background: yellow;
}
</style>
