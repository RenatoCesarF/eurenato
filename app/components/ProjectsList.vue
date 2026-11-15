<script setup>
import { ref } from 'vue'
import { projects } from '~/data/projects'
import Photocard from './smaller/Photocard.vue'
import ArrowSquare from '~/components/smaller/ArrowSquare'

const carousel = ref(null)

function scrollCarousel(direction) {
  if (!carousel.value) return

  const card = carousel.value.querySelector('.card')
  const styles = getComputedStyle(carousel.value)
  const gap = Number.parseFloat(styles.columnGap) || 0
  const distance = card ? card.offsetWidth + gap : carousel.value.clientWidth * 0.8

  carousel.value.scrollBy({
    left: direction * distance,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section class="projects-carousel">
    <ArrowSquare 
      direction="left"
      type="yellow"
      @click="scrollCarousel(-1)"
    />

    <ul ref="carousel" class="cards">
      <li
        v-for="project in projects"
        :key="project.id"
      >
        <NuxtLink
          :to="`/projects/${project.id}`"
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

    <ArrowSquare 
      type="yellow"
      direction="right"
      @click="scrollCarousel(1)"
    />

    <span class="sr-only">Próximo projeto</span>
  </section>
</template>

<style scoped>

.projects-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.cards {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: clamp(250px, 45vw, 280px);
  gap: 2.5rem;

  width: 100%;
  margin: 0;
  padding: 2rem 3rem;

  box-sizing: border-box;
  list-style: none;

  overflow-x: auto;
  overscroll-behavior-x: contain;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 5rem;

  scrollbar-width: none;
}

.cards::-webkit-scrollbar {
  display: none;
}

.sr-only {
  position: absolute;

  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  white-space: nowrap;
  border: 0;
}

@media (max-width: 600px) {
  .cards {
    grid-auto-columns: 70vw;
    gap: 2.0rem;

    padding: 2.5rem 3rem;
    scroll-padding-inline: 4rem;
  }

  .card {
    min-height: 13rem;
  }
}
</style>
