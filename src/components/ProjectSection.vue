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
  </section>
</template>


<style scoped>

.project-section {
  height: 20rem;
  padding-top: 2vh;
  padding-bottom: 10vh;
  background-color: Blue;
  width: 100vw;
}

</style>
