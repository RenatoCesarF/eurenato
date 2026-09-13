<script setup lang='ts'>
  import BlogList from '@/components/BlogList.vue'
  import BlogTitle from '@/components/BlogTitle.vue'
</script>

<template>
  <section class="blog-section">
    <div class="blog-title">
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
  height: 140vh;
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
  height: clamp(380px, 60vh, 1600px);
  /* margin-top: auto; */
  flex-shrink: 0;

  overflow-x: clip;
  overflow-y: visible;
}

.computer,
.pelican {
  position: absolute;
  bottom: 10vw;
  z-index: 1;

  display: block;
  object-fit: contain;
  object-position: bottom;

  user-select: none;
  pointer-events: none;
}

.computer {
  left: -2vw;

  width: clamp(400px, 36vw, 1270px);

  object-position: left bottom;
}

.pelican {
  right: -2vw;

  width: clamp(310px, 30vw, 1740px);

  object-position: right bottom;
}

/* Tablets */
@media (max-width: 900px) {
  .blog-section {
    height: 120vh;

  }
  .cuttings {
    height: clamp(250px, 44vw, 430px);
    bottom: 10vw;
  }

  .computer {
    left: -4vw;
    width: 40vw;
  }

  .pelican {
    right: -5vw;
    width: 45vw;
  }

}

/* Celulares */
@media (max-width: 600px) {
  .blog-section {
    padding-top: 3rem;
    height: 100vh;
  }

  .cuttings {
    height: clamp(220px, 25vw, 340px);
  }

  .computer {
    left: -8vw;
    width: 52vw;
  }

  .pelican {
    right: -12vw;
    width: 60vw;
  }

}
</style>
