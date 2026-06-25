<script setup lang="ts">
   import Header from '@/components/Header.vue'
   import HeaderMenu from '@/components/HeaderMenu.vue'

   import AboutSection from '@/components/AboutSection.vue'
   import BlogSection from '@/components/BlogSection.vue'
   import ProjectSection from '@/components/ProjectSection.vue'
</script>

<template>
  <Header/>
  <HeaderMenu/>

  <main>
    <content>
      <!-- <AboutSection/> -->
      <ProjectSection/>
      <BlogSection/>
    </content>
  </main>
</template>

<style scoped>
</style>
