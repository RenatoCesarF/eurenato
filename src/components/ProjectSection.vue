<script setup lang='ts'>
  import ProjectsList from '@/components/ProjectsList.vue'
  import ProjectTitle from '@/components/ProjectTitle.vue'

</script>

<template>
  <section class='project-section'>
    <div>
      <ProjectTitle/>
    </div>
    <div>
      <ProjectsList/>
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
  min-height: 100vh;
  padding-top: 2vh;
  background-color: var(--blue-bg-color);
  width: 100%;

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

.woman {
  position: absolute;
  right: 0;
  bottom: -5vw;

  width: 35%;
}

.guitar {
  position: absolute;
  left: 2%;
  bottom: -4%;

  width: 20%;
}

.garca {
  position: absolute;
  left: 30%;
  bottom: 5%;

  width: 11%;
}

.paper-phrase{
  right: 35%;
  bottom: 20%;
  width: 45vw;
  position: absolute;
}
</style>
