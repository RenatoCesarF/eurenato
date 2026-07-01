<script setup lang='ts'>
  import BlogList from '@/components/BlogList.vue'
  import BlogTitle from '@/components/BlogTitle.vue'
  import PaperStrip from '@/components/PaperStrip.vue'
</script>

<template>
  <section class='blog-section'>
    <div>
      <BlogTitle/>
    </div>
    <div>
      <BlogList/>
    </div>
  </section>
</template>


<style scoped>
.blog-section {
  height: 200vh;
  padding-top: 20vh;
  padding-bottom: 10vh;
  background-color: var(--yellow-bg-color);
  width: 100vw;
}

</style>
