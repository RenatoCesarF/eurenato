<script setup>
  const props = defineProps(['title', 'description', 'link', 'tag', 'index' ])
</script>

<template>
  <div
    class="card"
    :class="`card--cut-${(props.index % 5) + 1}`"
  >
    <div class="card-paper">
      <span
        class="paper-texture"
        aria-hidden="true"
      ></span>

      <article class="content">
        <div>
          <h3>{{ props.title }}</h3>

          <p>{{ props.description }}</p>
        </div>

        <a :href="props.link">
          {{ props.tag }}
        </a>
      </article>
    </div>
  </div>
</template>


<style scoped>
.card {
  --rotation: 0deg;
  --offset: 0px;
  --card-min-height: 300px;
  --card-clip: inset(0);
  --paper-texture: url("/assets/textures/01.jpg");
  --tag-color: #be4040;

  position: relative;
  z-index: 4;

  padding: 0;

  min-height: var(--card-min-height);

  scroll-snap-align: start;

  filter:
    drop-shadow(0 2px 6px rgb(50 38 20 / 26%))
    drop-shadow(0 4px 6px rgb(50 38 20 / 23%));

  filter:
    drop-shadow(0 5px 3px rgb(50 38 20 / 18%))
    drop-shadow(0 20px 16px rgb(50 38 20 / 17%));


  transform-origin: center;

  transition:
    transform 180ms ease,
    filter 180ms ease;
}

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

@media (max-width: 600px) {
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
}
</style>
