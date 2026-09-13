<script setup lang='ts'>
  import BlogList from '@/components/BlogList.vue'
  import BlogTitle from '@/components/BlogTitle.vue'
</script>

<template>
  <section class="blog-section">
    <div class="blog-title" id="blog">
      <BlogTitle />
    </div>

    <div class="blog-list">
      <BlogList />
    </div>

    <div class="cuttings">
      <img class="computer" src="/assets/paper-cuts/computador.png" alt="" >
      <img class="pelican" src="/assets/paper-cuts/pelicano.png" alt="" >
    </div>
  </section>
</template>


<style scoped>
.blog-section {
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 115vh;
  padding-top: 10vh;

  background-color: var(--yellow-bg-color);

  overflow-x: clip;
}

/* Título e posts sempre ficam acima dos recortes */
.blog-title,
.blog-list {
  position: relative;
  z-index: 2;
}

.cuttings {
  position: relative;
  z-index: 1;

  width: 100%;
  height: clamp(380px, 58vh, 1600px);
  flex-shrink: 0;

  overflow-x: clip;
  overflow-y: visible;
}

.computer,
.pelican {
  position: absolute;
  bottom: 23vw;
  z-index: 1;

  display: block;
  object-fit: contain;
  object-position: bottom;

  user-select: none;
  pointer-events: none;
}

.computer {
  left: -2vw;
  width: clamp(400px, 40vw, 570px);

  object-position: left bottom;
}

.pelican {
  right: -2vw;

  width: clamp(310px, 40vw, 1740px);

  object-position: right bottom;
}

/* Tablets */
@media (max-width: 900px) {
  .blog-section {
    height: 110vh;
  }

  .cuttings {
    height: 47vw
  }

  .computer {
    width: 50vw;
  }

  .pelican {
    right: -9vw;
    width: 58vw;
  }

}

/* Celulares */
@media (max-width: 600px) {
  .blog-section {
    padding-top: 3rem;
    height: 100vh;
  }

  .cuttings{
    height: 57vw;
  }

  .computer {
    width: 62vw;
  }

  .pelican {
    right: -13vw;
    width: 66vw;
  }

}
</style>
