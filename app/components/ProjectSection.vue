<script setup lang='ts'>
  import ProjectsList from '@/components/ProjectsList.vue'
  import ProjectTitle from '@/components/ProjectTitle.vue'

</script>

<template>
  <section class='project-section'>
    <div id="projetos">
      <ProjectTitle/>
    </div>
    <div class="projects-list">
      <ProjectsList />
    </div>

    <div class="cuttings">
      <img class="paper-phrase" src="/assets/paper-tape-phrase.png">
      <img class="guitar" src="/assets/paper-cuts/guitar.png">
      <img class="garca" src="/assets/paper-cuts/garca.png">
      <img class="woman" src="/assets/paper-cuts/girl flower.png">
    </div>
  </section>
</template>


<style scoped>
.project-section {
  height: 53rem;
  padding-top: 2vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  background: transparent;

  position: relative;
  z-index: 0;
}

.projects-list {
  position: relative;
  z-index: 2;
}

.cuttings {
  position: relative;
  z-index: 1;

  width: 100%;
  height: clamp(200px, 20vh, 580px);
  margin-top: auto;
  flex-shrink: 0;

  overflow-x: clip;
  overflow-y: visible;
}

.woman,
.guitar,
.garca {
  position: absolute;
  bottom: 0;
  z-index: 1;

  display: block;

  object-fit: contain;
  object-position: bottom;
  user-select: none;
  pointer-events: none;
}

.woman {
  right: -1vw;
  bottom: -5vh;

  width: clamp(420px, 38vw, 400px);

  object-position: right bottom;
}

.guitar {
  left: clamp(0.25rem, 2vw, 2rem);

  bottom: -5vh;

  width: clamp(220px, 35vw, 350px);

  object-position: left bottom;
}

.garca {
  left: 40%;

  width: clamp(145px, 20vw, 260px);

  transform: translateX(-50%);
}

/* Centralizada horizontalmente na tela */
.paper-phrase {
  position: absolute;
  left: 50%;
  right: auto;
  bottom: 25%;
  z-index: 2;

  width: clamp(300px, 43vw, 500px);

  transform: translateX(-50%);
}

/* Tablets */
@media (max-width: 900px) {
  .cuttings {
    height: clamp(150px, 33vw, 430px);
  }

  .woman {
    right: -4vw;
    width: 52vw;
  }

  .guitar {
    left: -1vw;
    width: 30vw;
  }

  .garca {
    left: 40%;
    width: 19vw;
  }

  .paper-phrase {
    bottom: 25%;
    width: 47vw;
  }
}

/* Celulares */
@media (max-width: 600px) {
  .cuttings {
    height: clamp(120px, 42vw, 330px);
  }

  .woman {
    right: -8vw;
    width: 68vw;
  }

  .guitar {
    left: -5vw;
    width: 42vw;
  }

  .garca {
    left: 42%;
    width: 25vw;
  }

  .paper-phrase {
    bottom: 34%;
    width: 58vw;
  }
}
</style>
