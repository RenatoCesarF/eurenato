<script setup lang='ts'>
  import BlogList from '@/components/BlogList.vue'
  import BlogTitle from '@/components/BlogTitle.vue'
</script>

<template>
  <section class="blog-section textured-section">
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
  --section-background: var(--yellow-bg-color);
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 50rem;
  padding-top: 10vh;

  background-color: var(--yellow-bg-color);

  overflow-x: clip;

  z-index: 0;
}

/* Título e posts sempre ficam acima dos recortes */
.blog-title,
.blog-list {
  position: relative;
}

.cuttings {
  position: relative;
  z-index: 1;

  width: 100%;
  height: clamp(280px, 40vh, 200px);
  flex-shrink: 0;

  overflow-x: clip;
  overflow-y: visible;
}

.computer,
.pelican {
  position: absolute;
  bottom: 15vw;
  z-index: 1;

  display: block;
  object-fit: contain;
  object-position: bottom;

  user-select: none;
  pointer-events: none;
}

.computer {
  left: -2vw;
  width: clamp(400px, 30vw, 570px);

  object-position: left bottom;
}

.pelican {
  right: -2vw;

  width: clamp(310px, 35vw, 640px);

  object-position: right bottom;
}

/* Tablets */
@media (max-width: 900px) {
  .blog-section {
    height: 110vh;
  }

  .cuttings {
    height: clamp(350px, 30vh, 550px);
  }

  .computer {
    width: clamp(500px, 35vw, 1070px);
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
    height: 54vw;
  }

  .computer {
    width: clamp(100px, 70vw, 570px);
  }

  .pelican {
    right: -13vw;
    width: 66vw;
  }

}
</style>
