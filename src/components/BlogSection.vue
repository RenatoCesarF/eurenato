<script setup lang='ts'>
  import BlogList from '@/components/BlogList.vue'
  import BlogTitle from '@/components/BlogTitle.vue'
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
  height: 26rem;
  padding-top: 2vh;
  padding-bottom: 10vh;
  background-color: Yellow;
  width: 100vw;
}

</style>
