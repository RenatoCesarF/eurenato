<script setup>
import { ref } from 'vue'

const carousel = ref(null)

const posts = [
  {
    id: 1,
    title: 'Bold Choices',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'Creating New Worlds',
    description:
      'Ideas, experiments and observations about games, interfaces and the strange process of creating digital experiences.',
    link: '#',
    tag: 'Games',
  },
  {
    id: 3,
    title: 'Learning Through Play',
    description:
      'A small collection of notes about interaction, storytelling and the things games can teach us.',
    link: '#',
    tag: 'Thoughts',
  },
  {
    id: 4,
    title: 'The Shape of an Idea',
    description:
      'How unfinished sketches, discarded concepts and small mistakes sometimes become the most interesting parts of a project.',
    link: '#',
    tag: 'Process',
  },
  {
    id: 5,
    title: 'A Curious Experiment',
    description:
      'Notes from an experiment involving software, people and unexpected ways of interacting with technology.',
    link: '#',
    tag: 'Research',
  },
]
</script>

<template>
  <section class="projects-carousel">
    <ul ref="carousel" class="cards">
<li
  v-for="(post, index) in posts"
  :key="post.id"
  class="card"
  :class="`card--cut-${(index % 5) + 1}`"
>
  <span
    class="paper-texture"
    aria-hidden="true"
  ></span>

  <article class="content">
          <div>
            <h3>{{ post.title }}</h3>

            <p>{{ post.description }}</p>
          </div>

          <a :href="post.link">
            {{ post.tag }}
          </a>
  </article>
</li>
    </ul>
  </section>
</template>

<style scoped>
.projects-carousel {
  width: 100%;
  overflow: hidden;
}

.cards {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min(78vw, 370px);
  align-items: start;
  gap: 1.75rem;

  width: 100%;
  margin: 0;
  padding: 3.5rem 2.5rem 4.5rem;

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

.card {
  --rotation: 0deg;
  --offset: 0px;
  --paper-texture: url("/assets/textures/01.jpg");
  --tag-color: #be4040;

  position: relative;
  isolation: isolate;

  min-height: 430px;
  padding: 2rem 1.8rem 1.7rem;

  color: #26231f;
  background-color: #e9e6dd;

  scroll-snap-align: start;

  filter:
    drop-shadow(0 4px 2px rgb(50 38 20 / 16%))
    drop-shadow(0 14px 12px rgb(50 38 20 / 13%));

  transform:
    translateY(var(--offset))
    rotate(var(--rotation));

  transform-origin: center;

  transition:
    transform 180ms ease,
    filter 180ms ease;
}

/*
 * Primeira cópia da textura:
 * Multiply com 55% de opacidade.
 */
.card::before {
  position: absolute;
  inset: 0;
  z-index: 0;

  content: "";

  background-image: var(--paper-texture);
  background-position: center;
  background-size: cover;

  filter: grayscale(1) contrast(1.04);
  mix-blend-mode: multiply;
  opacity: 0.55;

  pointer-events: none;
}

/*
 * Segunda cópia da textura:
 * Soft Light com 30% de opacidade.
 */
.paper-texture {
  position: absolute;
  inset: 0;
  z-index: 0;

  display: block;

  background-image: var(--paper-texture);
  background-position: center;
  background-size: cover;

  filter: grayscale(1) contrast(1.02);
  mix-blend-mode: soft-light;
  opacity: 0.3;

  pointer-events: none;
}

/*
 * Falha na borda usada para simular
 * um pedaço arrancado do papel.
 */
.card::after {
  position: absolute;
  z-index: 3;

  content: "";

  background: var(--yellow-bg-color, #d9bd37);

  pointer-events: none;
}

.card:hover,
.card:focus-within {
  z-index: 3;

  filter:
    drop-shadow(0 5px 3px rgb(50 38 20 / 18%))
    drop-shadow(0 20px 16px rgb(50 38 20 / 17%));

  transform:
    translateY(calc(var(--offset) - 8px))
    rotate(0deg);
}

/* Primeiro tipo de recorte */
.card--cut-1 {
  --rotation: -2.8deg;
  --offset: 8px;
  --paper-texture: url("/assets/textures/01.jpg");
  --tag-color: #41b96b;

  clip-path: polygon(
    1% 1%,
    18% 0,
    37% 1.4%,
    58% 0.2%,
    79% 1.2%,
    99% 0,
    98.6% 18%,
    100% 38%,
    98.5% 58%,
    99.7% 78%,
    98% 99%,
    78% 98.6%,
    58% 100%,
    37% 98.8%,
    18% 100%,
    0 98%,
    1.2% 78%,
    0 59%,
    1% 39%,
    0.2% 19%
  );
}

.card--cut-1::after {
  top: 34%;
  right: -1px;

  width: 30px;
  height: 45px;

  clip-path: polygon(
    100% 0,
    100% 100%,
    58% 92%,
    68% 72%,
    15% 54%,
    66% 31%,
    45% 10%
  );
}

/* Segundo tipo de recorte */
.card--cut-2 {
  --rotation: 1.9deg;
  --offset: 22px;
  --paper-texture: url("/assets/textures/04.jpg");
  --tag-color: #6954c7;

  min-height: 400px;

  clip-path: polygon(
    0.5% 0,
    24% 1.8%,
    47% 0.4%,
    71% 2%,
    100% 1%,
    98.7% 20%,
    99.8% 42%,
    98% 63%,
    100% 82%,
    98.5% 100%,
    75% 98.2%,
    52% 99.7%,
    27% 98.4%,
    1% 100%,
    2% 79%,
    0 61%,
    1.5% 40%,
    0 18%
  );
}

.card--cut-2::after {
  top: 58%;
  left: -1px;

  width: 34px;
  height: 39px;

  clip-path: polygon(
    0 0,
    47% 7%,
    34% 27%,
    88% 47%,
    39% 64%,
    60% 89%,
    0 100%
  );
}

/* Terceiro tipo de recorte */
.card--cut-3 {
  --rotation: -1.3deg;
  --offset: 3px;
  --paper-texture: url("/assets/textures/05.jpg");
  --tag-color: #c9484e;

  min-height: 445px;

  clip-path: polygon(
    2% 1.5%,
    16% 0.2%,
    35% 2%,
    56% 0,
    75% 1.7%,
    98.5% 0.6%,
    100% 23%,
    98% 46%,
    99.6% 67%,
    98% 99%,
    81% 97.8%,
    64% 100%,
    42% 98.4%,
    22% 99.7%,
    0.6% 98%,
    1.8% 74%,
    0 51%,
    1.5% 27%
  );
}

.card--cut-3::after {
  right: 24%;
  bottom: -1px;

  width: 42px;
  height: 28px;

  clip-path: polygon(
    0 100%,
    8% 54%,
    30% 66%,
    48% 8%,
    67% 62%,
    92% 38%,
    100% 100%
  );
}

/* Quarto tipo de recorte */
.card--cut-4 {
  --rotation: 3.1deg;
  --offset: 18px;
  --paper-texture: url("/assets/textures/06.jpg");
  --tag-color: #d67b27;

  min-height: 415px;

  clip-path: polygon(
    0 1.8%,
    20% 0.4%,
    39% 2.1%,
    62% 0.5%,
    81% 1.8%,
    100% 0,
    98.4% 19%,
    100% 39%,
    98.7% 61%,
    99.5% 84%,
    97.5% 98.5%,
    76% 100%,
    57% 98.2%,
    38% 100%,
    17% 98%,
    1.5% 99.2%,
    0 80%,
    1.6% 57%,
    0.4% 36%,
    1.8% 17%
  );
}

.card--cut-4::after {
  top: -1px;
  left: 55%;

  width: 46px;
  height: 27px;

  clip-path: polygon(
    0 0,
    100% 0,
    85% 44%,
    62% 31%,
    50% 94%,
    31% 39%,
    9% 58%
  );
}

/* Quinto tipo de recorte */
.card--cut-5 {
  --rotation: -3.6deg;
  --offset: 28px;
  --paper-texture: url("/assets/textures/04.jpg");
  --tag-color: #3679b8;

  min-height: 425px;

  clip-path: polygon(
    1.7% 0.3%,
    19% 1.7%,
    40% 0,
    59% 1.3%,
    82% 0.4%,
    99% 2%,
    100% 18%,
    98.2% 36%,
    99.8% 55%,
    98.5% 75%,
    100% 97.5%,
    80% 99.5%,
    61% 97.8%,
    40% 100%,
    18% 98.2%,
    0 99.4%,
    1.8% 81%,
    0.2% 62%,
    1.5% 43%,
    0 21%
  );
}

.card--cut-5::after {
  top: 23%;
  right: -1px;

  width: 36px;
  height: 58px;

  clip-path: polygon(
    100% 0,
    100% 100%,
    55% 91%,
    72% 71%,
    22% 59%,
    60% 42%,
    31% 18%,
    70% 9%
  );
}

.content {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  min-height: inherit;

  font-family: Georgia, "Times New Roman", serif;
}

.content h3 {
  margin: 0 0 1rem;
  padding-bottom: 0.4rem;

  color: #201e1a;

  font-size: clamp(2rem, 3vw, 2.75rem);
  line-height: 0.95;
  letter-spacing: -0.045em;

  border-bottom: 4px double #292620;
}

.content p {
  margin: 0;

  color: #302d28;

  font-size: 1.05rem;
  line-height: 1.25;
  text-align: justify;
  hyphens: auto;
}

.content a {
  align-self: flex-start;

  padding: 0.45rem 0.9rem;

  color: white;
  background: var(--tag-color);

  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;

  clip-path: polygon(
    4% 8%,
    98% 0,
    94% 92%,
    0 100%
  );

  transform: rotate(-2deg);

  transition: transform 150ms ease;
}

.content a:hover {
  transform: rotate(0deg) scale(1.05);
}

.content a:focus-visible {
  outline: 3px solid #201e1a;
  outline-offset: 4px;
}

@media (max-width: 600px) {
  .cards {
    grid-auto-columns: 84vw;
    gap: 1.25rem;

    padding: 2.75rem 1rem 4rem;
    scroll-padding-inline: 1rem;
  }

  .card {
    min-height: 390px;
    padding: 1.7rem 1.5rem 1.5rem;
  }

  .content h3 {
    font-size: clamp(1.8rem, 9vw, 2.4rem);
  }

  .content p {
    font-size: 1rem;
  }
}
</style>
