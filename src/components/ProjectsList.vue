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
            :alt="project.title"
          />
        </div>

        <div class="content">
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>

          <a :href="project.link">
            Ver projeto
            <span aria-hidden="true">→</span>
          </a>
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
  grid-auto-columns: min(75vw, 400px);
  gap: 1rem;

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

  min-height: 500px;
  padding: 0.75rem;

  background: #161616;
  color: white;

  border-radius: 1rem;

  scroll-snap-align: start;
}

.visual {
  height: 260px;
  overflow: hidden;
  border-radius: 0.75rem;
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
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  padding: 1.25rem 0.75rem 0.75rem;
}

.content h3 {
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
}

.content p {
  margin: 0;
  line-height: 1.5;
}

.content a {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: fit-content;

  color: inherit;
  font-weight: 700;
  text-decoration: none;
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
    min-height: 440px;
  }

  .visual {
    height: 220px;
  }
}
</style>
