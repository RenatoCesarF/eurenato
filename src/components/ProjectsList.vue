<script setup>
import { ref } from 'vue'

const carousel = ref(null)

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description of the first project.',
    image: '/assets/projects/project-1.png',
    link: '#',
    rotation: -2.5,
    offset: 8,
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of the second project.',
    image: 'https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill',
    link: '#',
    rotation: 1.8,
    offset: 0,
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of the third project.',
    image: 'https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill',
    link: '#',
    rotation: -1.2,
    offset: 12,
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Description of the fourth project.',
    image: 'https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill',
    link: '#',
    rotation: 2.7,
    offset: 4,
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'Description of the fifth project.',
    image: 'https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill',
    link: '#',
    rotation: -1.9,
    offset: 10,
  },
]

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
        class="card"
        :style="{
          '--rotation': `${project.rotation}deg`,
          '--offset': `${project.offset}px`,
        }"
      >
        <div class="visual">
          <img
            class="card-image"
            :src="project.image"
            :alt="`Imagem do projeto ${project.title}`"
          />
        </div>

        <div class="content">
          <h3>{{ project.title }}</h3>
        </div>
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
  padding: 3rem 5rem;

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

/* Papel da Polaroid */
.card {
  display: flex;
  flex-direction: column;

  min-height: 300px;
  padding: 1rem 1rem 0.75rem;

  color: #171717;
  background-color: #f4f0e6;
  background-image:
    radial-gradient(
      circle at 20% 30%,
      rgb(90 68 42 / 12%) 0 0.6px,
      transparent 0.9px
    ),
    radial-gradient(
      circle at 70% 65%,
      rgb(255 255 255 / 65%) 0 0.7px,
      transparent 1px
    ),
    linear-gradient(
      115deg,
      rgb(255 255 255 / 35%),
      transparent 45%,
      rgb(70 48 24 / 4%)
    );

  background-size:
    9px 11px,
    13px 15px,
    100% 100%;

  border: 1px solid rgb(70 50 25 / 12%);
  border-radius: 0.15rem;

  box-shadow:
    0 18px 30px rgb(0 0 0 / 28%),
    0 4px 8px rgb(0 0 0 / 18%);

  scroll-snap-align: start;

  transform:
    translateY(var(--offset))
    rotate(var(--rotation));

  transform-origin: center;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.card:hover {
  z-index: 2;

  transform:
    translateY(calc(var(--offset) - 8px))
    rotate(0deg);

  box-shadow:
    0 24px 38px rgb(0 0 0 / 32%),
    0 6px 10px rgb(0 0 0 / 20%);
}

/* Moldura da fotografia */
.visual {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;

  background: #272727;
}

/* Sombra colocada sobre a imagem */
.visual::after {
  position: absolute;
  inset: 0;
  z-index: 1;

  content: "";
  pointer-events: none;

  box-shadow:
    inset 0 0 5px rgb(0 0 0 / 65%),
    inset 0 0 25px rgb(0 0 0 / 48%);
}

.card-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  min-height: 68px;
  padding: 0.8rem 0.5rem 0.25rem;
}

.content h3 {
  margin: 0;

  font-size: 1.5rem;
  text-align: center;
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

  .paper-arrow--left {
    left: 0.25rem;
  }

  .paper-arrow--right {
    right: 0.25rem;
  }
}
</style>
