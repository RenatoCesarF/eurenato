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

    <div class="cuttings">
      <img class="computer" src="/assets/paper-cuts/computador.png">
      <img class="pelican" src="/assets/paper-cuts/pelicano.png">
    </div>
  </section>
</template>


<style scoped>
.blog-section {
  padding-top: 20vh;
  background-color: var(--yellow-bg-color);
  width: 100vw;

  display: flex;
  flex-direction: column;
}

.cuttings {
  position: relative;
  margin-top: auto;

  width: 100%;
  height: 40vh;
  flex-shrink: 0;
}


.pelican {
  position: absolute;
  right: 0;
  bottom: -5vw;

  width: 40%
}
.computer {
  position: absolute;
  left: 0;
  bottom: -5vw;

  width: 35%;
}
</style>
