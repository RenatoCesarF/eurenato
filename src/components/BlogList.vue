<script setup>
import { ref } from 'vue'

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
  <section class="posts-carousel">

    <button
      class="paper-arrow paper-arrow--left"
      type="button"
      aria-label="Projeto anterior"
      @click="scrollCarousel(-1)"
    >
      <img
        class="paper-arrow-image"
        src="/assets/letters/arrow_blog.png"
        alt=""
      />
    </button>
    <span class="sr-only">Projeto Anterior</span>

    <ul ref="carousel" class="cards">
      <li
        v-for="(post, index) in posts"
        :key="post.id"
        class="card"
        :class="`card--cut-${(index % 5) + 1}`"
      >
        <div class="card-paper">
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
        src="/assets/letters/arrow_blog.png"
        alt=""
      />
    </button>
    <span class="sr-only">Próximo projeto</span>
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

.card {
  --rotation: 0deg;
  --offset: 0px;
  --card-min-height: 300px;
  --card-clip: inset(0);
  --paper-texture: url("/assets/textures/01.jpg");
  --tag-color: #be4040;

  position: relative;
  z-index: 1;

  min-height: var(--card-min-height);

  scroll-snap-align: start;

  filter:
    drop-shadow(0 2px 6px rgb(50 38 20 / 26%))
    drop-shadow(0 4px 6px rgb(50 38 20 / 23%));

  transform:
    translateY(var(--offset))
    rotate(var(--rotation));

  transform-origin: center;

  transition:
    transform 180ms ease,
    filter 180ms ease;
}

/*
 * Elemento interno:
 * representa o papel e recebe o recorte.
 *
 * Como este elemento possui áreas transparentes,
 * a sombra aplicada em .card acompanha sua silhueta.
 */
.card-paper {
  position: relative;
  isolation: isolate;

  display: flex;

  box-sizing: border-box;
  min-height: var(--card-min-height);
  padding: 2rem 1.8rem 1.7rem;

  color: #26231f;
  background-color: #e9e6dd;

  clip-path: var(--card-clip);
}

/*
 * Primeira cópia da textura:
 * Multiply com 55% de opacidade.
 */
.card-paper::before {
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

/*
 * Primeiro tipo de recorte:
 * rasgo na lateral direita.
 */
.card--cut-1 {
  --rotation: -2.8deg;
  --offset: 8px;
  --card-min-height: 300px;
  --paper-texture: url("/assets/textures/01.jpg");
  --tag-color: #41b96b;

  --card-clip: polygon(
    1% 1%,
    18% 0,
    37% 1.4%,
    58% 0.2%,
    79% 1.2%,
    99% 0,

    98.6% 18%,
    100% 31%,

    94% 34%,
    97% 37%,
    89% 40%,
    95% 44%,
    91% 48%,
    98.5% 52%,

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

/*
 * Segundo tipo de recorte:
 * rasgo na lateral esquerda.
 */
.card--cut-2 {
  --rotation: 1.9deg;
  --offset: 22px;
  --card-min-height: 300px;
  --paper-texture: url("/assets/textures/04.jpg");
  --tag-color: #6954c7;

  --card-clip: polygon(
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
    0% 71%,

    6% 68%,
    3% 65%,
    11% 62%,
    5% 59%,
    9% 56%,
    0% 53%,

    1.5% 40%,
    0% 18%
  );
}

/*
 * Terceiro tipo de recorte:
 * rasgo na borda inferior.
 */
.card--cut-3 {
  --rotation: -1.3deg;
  --offset: 3px;
  --card-min-height: 345px;
  --paper-texture: url("/assets/textures/05.jpg");
  --tag-color: #c9484e;

  --card-clip: polygon(
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
    77% 100%,

    74% 94%,
    71% 97%,
    68% 88%,
    65% 96%,
    62% 91%,
    59% 100%,

    42% 98.4%,
    22% 99.7%,
    0.6% 98%,
    1.8% 74%,
    0 51%,
    1.5% 27%
  );
}

/*
 * Quarto tipo de recorte:
 * rasgo na borda superior.
 */
.card--cut-4 {
  --rotation: 3.1deg;
  --offset: 18px;
  --card-min-height: 315px;
  --paper-texture: url("/assets/textures/06.jpg");
  --tag-color: #d67b27;

  --card-clip: polygon(
    0% 1.8%,
    20% 0.4%,
    39% 2.1%,

    54% 0.5%,
    57% 6%,
    60% 3%,
    63% 10%,
    66% 4%,
    70% 7%,
    73% 0.8%,

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

/*
 * Quinto tipo de recorte:
 * rasgo maior na lateral direita.
 */
.card--cut-5 {
  --rotation: -3.6deg;
  --offset: 28px;
  --card-min-height: 325px;
  --paper-texture: url("/assets/textures/04.jpg");
  --tag-color: #3679b8;

  --card-clip: polygon(
    1.7% 0.3%,
    19% 1.7%,
    40% 0,
    59% 1.3%,
    82% 0.4%,
    99% 2%,
    100% 18%,

    99% 22%,
    94% 25%,
    97% 28%,
    88% 32%,
    95% 36%,
    90% 40%,
    97% 44%,

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

.content {
  position: relative;
  z-index: 1;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  width: 100%;

  font-family: Georgia, "Times New Roman", serif;
}

.content h3 {
  margin: 0 0 1rem;
  padding-bottom: 0.4rem;

  color: #201e1a;

  font-size: clamp(2rem, 2vw, 2.55rem);
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

  .card {
    --card-min-height: 290px;
  }

  .card-paper {
    padding: 1.7rem 1.5rem 1.5rem;
  }

  .content h3 {
    font-size: clamp(1.8rem, 9vw, 2.4rem);
  }

  .content p {
    font-size: 1rem;
  }

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
</style>
