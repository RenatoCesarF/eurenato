<script setup>
import { ref } from 'vue'
import NewspaperBlog from "./smaller/NewspaperBlog.vue"
import ArrowSquare from '~/components/smaller/ArrowSquare'

const carousel = ref(null)

const posts = await queryCollection('blog').all()

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
  <section class="posts-carousel">
    <ArrowSquare 
      direction="left"
      type="orange"
      @click="scrollCarousel(-1)"
    />
    <span class="sr-only">Post Anterior</span>

    <ul ref="carousel" class="cards">
      <li
        v-for="(post, index) in posts"
        :key="post.id"
      >
        <NewspaperBlog
          :path="post.path"
          :title="post.title"
          :index="index"
          :description="post.description"
          :tags="post.tags"
          :date="post.date"
        />
      </li>
    </ul>

    <ArrowSquare 
      direction="right"
      type="orange"
      @click="scrollCarousel(-1)"
    />
    <span class="sr-only">Próximo post</span>
  </section>
</template>

<style scoped>
.posts-carousel {
  width: 100%;
  background: transparent;
  overflow: hidden;

  position: relative;
}

.cards {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min(48vw, 300px);
  align-items: start;
  gap: 1.75rem;

  width: 100%;
  margin: 0;
  padding: 1.5rem 1.5rem 3.5rem;

  list-style: none;

  overflow-x: auto;
  overscroll-behavior-x: contain;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 2.5rem;

  scrollbar-width: none;
}

.cards::-webkit-scrollbar {
  display: none;
}

/* Considerando que o PNG aponta para a direita */
.paper-arrow--left .paper-arrow-image {
  transform: rotate(266deg);
}

.paper-arrow--right .paper-arrow-image {
  transform: rotate(94deg);
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
    grid-auto-columns: 84vw;
    gap: 1.25rem;

    padding: 1.75rem 1rem 4rem;

    scroll-padding-inline: 1rem;
  }

  .paper-arrow {
    width: 42px;
    height: 42px;
  }

  .paper-arrow--left {
    left: 0.25rem;
  }

  .paper-arrow--right {
    right: 0.25rem;
  }
}
</style>
