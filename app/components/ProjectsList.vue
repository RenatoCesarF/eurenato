<script setup>
import { ref } from 'vue'
import { projects } from '~/data/projects'
import Photocard from './smaller/Photocard.vue'

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
    <button
      class="paper-arrow paper-arrow--left"
      type="button"
      aria-label="Projeto anterior"
      @click="scrollCarousel(-1)"
    >
      <img
        class="paper-arrow-image"
        src="/assets/letters/arrow.png"
        alt=""
      />
    </button>

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

    <button
      class="paper-arrow paper-arrow--right"
      type="button"
      aria-label="Próximo projeto"
      @click="scrollCarousel(1)"
    >
      <img
        class="paper-arrow-image"
        src="/assets/letters/arrow.png"
        alt=""
      />
    </button>
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

/* Setas em formato de papel recortado */
.paper-arrow {
  position: absolute;
  top: 50%;
  z-index: 5;

  width: 72px;
  height: 72px;
  padding: 0;

  cursor: pointer;

  background: transparent;
  border: 0;

  transform: translateY(-50%);
  transition: transform 150ms ease;
}

.paper-arrow--left {
  left: 0.75rem;
}

.paper-arrow--right {
  right: 0.75rem;
}

.paper-arrow-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 35%));

  transition:
    transform 150ms ease,
    filter 150ms ease;
}

/* Considerando que o PNG aponta para a direita */
.paper-arrow--left .paper-arrow-image {
  transform: rotate(176deg);
}

.paper-arrow--right .paper-arrow-image {
  transform: rotate(4deg);
}

.paper-arrow:hover {
  transform: translateY(-50%) scale(1.1);
}

.paper-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.paper-arrow:active .paper-arrow-image {
  filter: drop-shadow(0 2px 2px rgb(0 0 0 / 25%));
}

.paper-arrow:focus-visible {
  border-radius: 0.25rem;
  outline: 3px solid #171717;
  outline-offset: 4px;
}

@media (max-width: 600px) {
  .paper-arrow {
    width: 52px;
    height: 52px;
  }

  .paper-arrow--left {
    left: 0.25rem;
  }

  .paper-arrow--right {
    right: 0.25rem;
  }
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
    grid-auto-columns: 60vw;
    gap: 2.75rem;

    padding: 2.5rem 3rem;
    scroll-padding-inline: 4rem;
  }

  .card {
    min-height: 13rem;
  }

  .paper-arrow {
    width: 48px;
    height: 38px;
  }
}
</style>
