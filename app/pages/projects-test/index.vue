
<script setup>
import { projects } from '~/data/projects'
import Photocard from '~/components/smaller/Photocard'

definePageMeta({
  pageTransition: false,
  layoutTransition: false,
  viewTransition: true,
})
</script>

<template>
  <main class="projects-page">
    <ul class="cards">
      <li
        v-for="project in projects"
        :key="project.id"
      >
        <NuxtLink
          :to="`/projects-test/${project.id}`"
          class="project-link"
        >
          <div
            class="shared-photocard"
            :style="{
              viewTransitionName: `item-image-${project.id}`
            }"
          >
            <Photocard
              :title="project.title"
              :image="project.image"
              :rotation="project.rotation"
              :offset="project.offset"
              :id="project.id"
            />
          </div>
        </NuxtLink>
      </li>
    </ul>

  </main>
</template>

<style>
.projects-page {
  min-height: 100vh;
  padding: 80px 8%;
}

.projects-header {
  margin-bottom: 70px;
}

.projects-header h1 {
  margin: 0 0 10px;
  font-size: 42px;
}

.projects-header p {
  color: #aaa;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 45px;

  padding: 0;
  margin: 0;
  list-style: none;
}

.cards li {
  display: flex;
  justify-content: center;
}

.project-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.shared-photocard {
  display: inline-block;
  transform-origin: center;
}
</style>
