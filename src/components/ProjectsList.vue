<script setup>
import { ref } from 'vue'

const carousel = ref(null)

const projects = [
  {
    title: 'Project One',
    description: 'Description of the first project.',
    image: '/assets/projects/project-1.png',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Description of the second project.',
    image: '/assets/projects/project-2.png',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Description of the third project.',
    image: '/assets/projects/project-3.png',
    link: '#',
  },

  {
    title: 'Project Three',
    description: 'Description of the third project.',
    image: '/assets/projects/project-3.png',
    link: '#',
  },

  {
    title: 'Project Three',
    description: 'Description of the third project.',
    image: '/assets/projects/project-3.png',
    link: '#',
  },
]

function scrollCarousel(direction) {
  if (!carousel.value) return

  const distance = carousel.value.clientWidth * 0.8

  carousel.value.scrollBy({
    left: direction * distance,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section class="projects-carousel">
    <ul ref="carousel" class="cards">
      <li
        v-for="project in projects"
        :key="project.title"
        class="card"
      >
        <div class="visual">
          <img
            class="card-image"
            :src="project.image"
          />
        </div>

        <div class="content">
          <h3>{{ project.title }}</h3>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.projects-carousel {
  width: 100%;
  overflow: hidden;
}



.carousel-controls {
  display: flex;
  gap: 0.5rem;
}

.cards {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min(75vw, 380px);
  gap: 2rem;

  width: 100%;
  margin: 0;
  padding: 2rem;

  list-style: none;

  overflow-x: auto;
  overscroll-behavior-x: contain;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 2rem;

  scrollbar-width: none;
}

.cards::-webkit-scrollbar {
  display: none;
}

.card {
  display: flex;
  flex-direction: column;

  min-height: 400px;
  padding: 0.85rem;
  padding-top: 1rem;

  background: white;
  color: black;

  border-radius: 0.2rem;

  scroll-snap-align: start;
}

.visual {
  height: 330px;
  overflow: hidden;
}

.card-image {
  display: block;

  width: 100%;
  height: 100%;
  margin-top: .5rem;

  object-fit: cover;
}

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  padding: 1rem 0.5rem 0.5rem;
}

.content h3 {
  font-size: 1.5rem;
  text-align: center;
}


@media (max-width: 600px) {
  .carousel-header {
    padding-inline: 1rem;
  }

  .cards {
    grid-auto-columns: 85vw;
    padding: 1rem;
    scroll-padding-inline: 1rem;
  }

  .card {
    min-height: 400px;
  }

  .visual {
    height: 220px;
  }
}
</style>
