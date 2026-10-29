<script setup lang="ts">
  const route = useRoute()
  const router = useRouter()
  const texturesEnable = ref(true)

  const { data: page } = await useAsyncData('blog-' + route.path, () => {
    return queryCollection('blog').path(route.path).first()
  })

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
</script>

<template>
  <div class="bg">
    <div class="blog-header">
      <button
        class="paper-arrow paper-arrow--left"
        type="button"
        aria-label="Projeto anterior"
        @click="$router.back()"
      >
        <img
          class="paper-arrow-image"
          src="/assets/letters/arrow_blog.png"
          alt=""
        />
      </button>

      <div class="configuration">
        <button
          type="button"
          @click="texturesEnable = !texturesEnable"
          :aria-presset="!texturesEnable"
        >
          No Textures
        </button>

        <!-- <button -->
        <!--   type="button" -->
        <!--   @click="darkmodeEnable = !darkmodeEnable" -->
        <!--   :aria_presset="!darkmodeEnable" -->
        <!-- > -->
        <!--   Change Read mode -->
        <!-- </button> -->

      </div>
    </div>

    <div 
      class="paper"
      :class="{ 'paper--no-textures': !texturesEnable, 'dark-mode-paper': !darkmodeEnable}"
    >
      <div class="paper-content">
        <h1 class="post-title">{{ page.title }}</h1>
        <p class="post-description">{{ page.description }}</p>
        <p>{{ page.date }}</p>
        <hr />

        <ContentRenderer
          v-if="page"
          :value="page"
          class="content"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #2d2d2d;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(0.5rem, 3vw, 2rem);
  min-height: clamp(4rem, 10vh, 6rem);
  padding: clamp(0.75rem, 2vh, 2rem)
    clamp(1rem, 2vw, 2rem);
  box-sizing: border-box;
}

.blog-header .configuration {
  display: flex;
  align-items: center;
  gap: clamp(0.35rem, 1.5vw, 1rem);
}

.configuration button {
  font-size: clamp(0.7rem, calc(0.45rem + 1.2vw), 1rem);
  white-space: nowrap;
}

.paper-arrow {
  flex: 0 0 auto;
  z-index: 5;

  transform: rotate(266deg);
  width: clamp(2rem, 4vw, 3.25rem);
  height: clamp(2rem, 4vw, 3.25rem);
  padding: 0;

  cursor: pointer;
  background: transparent;
  border: 0;
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

.paper {
  position: relative;
  isolation: isolate;

  background-color: #F4ECD8;

  min-height: 100vh;
  width: auto;
  min-width: 0;
  box-sizing: border-box;
  color: #1A1A1A;

  margin: 0 clamp(0rem, calc(12vw - 1rem), 10rem);
  padding: 2rem clamp(1rem, 5vw, 4rem);

  flex: 1;
}

.paper--no-textures::before,
.paper--no-textures::after{
  display: none;
}

.paper::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  background-image: url('/assets/paper-background.png');
  background-position: top center;
  background-repeat: repeat-y;
  background-size: 100% auto;

  opacity: 0.3;
}

.paper::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image: url('/assets/noise.png');
  background-position: top left;
  background-repeat: repeat;
  background-size: 512px 512px;

  mix-blend-mode: multiply;
  opacity: 0.1;
}

.paper-content {
  position: relative;
  z-index: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1.5rem);
}

.post-title {
  font-family: jornal-body, serif;
  padding: 1rem clamp(0rem, 1.5vw, 2rem)
    clamp(1rem, 3vw, 2rem);
  margin: 0 0 clamp(0.5rem, 1.5vw, 1rem);

  color: #201e1a;

  font-size: clamp(3rem, 10vw, 9rem);
  line-height: 0.85;
  letter-spacing: -0.045em;

  border-bottom: 4px double #292620;
  text-align: center;

  overflow-wrap: anywhere;
}

.post-description {
  color: #302d02;
  font-size: clamp(1rem, calc(1rem + 1vw), 2.0rem);
  line-height: 1.35;
  text-align: justify;

  hyphens: auto;
  padding: 0 clamp(0rem, 3vw, 3rem);
}

.content {
  min-width: 0;
  margin-top: clamp(1rem, 3vw, 3rem);

  font-family: jornal-body, serif;
  font-size: clamp(1rem, calc(0.7rem + 1vw), 1.6rem);
  line-height: 1.7;
  text-align: justify;
  overflow-wrap: break-word;
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3) {
  font-family: jornal-body, serif;
  color: #201e1a;
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
  overflow-wrap: anywhere;
}

.content :deep(h1) {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin: clamp(1.5rem, 4vw, 3rem) 0
    clamp(0.75rem, 2vw, 1.5rem);
}

.content :deep(h2) {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  margin: clamp(1.5rem, 3.5vw, 2.5rem) 0
    clamp(0.75rem, 1.5vw, 1rem);

  border-bottom: 1px solid #292620;
  padding-bottom: 0.4rem;
}

.content :deep(h3) {
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  margin: clamp(1.25rem, 3vw, 2rem) 0
    clamp(0.5rem, 1vw, 0.75rem);
}

/* Parágrafos */
.content :deep(p) {
  text-align: justify;
  margin: 0 0 clamp(1rem, 2vw, 1.5rem);
  hyphens: auto;
  text-indent: clamp(0.75rem, 2vw, 2rem);
}

/* Links */
.content :deep(a) {
  color: #6b3425;
  text-decoration: underline;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
}

/* Listas */
.content :deep(ul),
.content :deep(ol) {
  padding-left: clamp(1.25rem, 3vw, 2rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Citações */
.content :deep(blockquote) {
  border-left: 4px double #292620;
  padding-left: clamp(0.75rem, 2vw, 1.5rem);
  margin: clamp(1.25rem, 3vw, 2rem) 0;
  font-style: italic;
  color: #50483e;
}

/* Imagens */
.content :deep(img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: clamp(1rem, 3vw, 2rem) auto;
}

/* Tabelas */
.content :deep(table) {
  display: block;
  max-width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
}

/* Código */
.content :deep(pre),
.content :deep(code) {
  font-family: monospace;
}

.content :deep(pre) {
  max-width: 100%;
  overflow-x: auto;
  padding: clamp(0.5rem, 2vw, 1rem);
  background: #dcd7cb;
  white-space: pre;
}

.content :deep(pre code) {
  overflow-wrap: normal;
}

@media (max-width: 700px) {
  .blog-header {
    min-height: 4.5rem;
    height: auto;
    padding: 0.75rem 1rem;
    gap: 0.75rem;
    justify-content: space-between;
  }

  .blog-header .configuration {
    gap: 0.4rem;
  }

  .configuration button {
    font-size: 0.75rem;
    padding: 0.5rem;
  }

  .paper {
    width: 100%;
    min-height: calc(100vh - 4.5rem);
    margin: 0;
    padding: 1.5rem clamp(1rem, 5vw, 1.5rem);
  }

  .paper-content {
    gap: 1rem;
  }

  /* Título da publicação */
  .post-title {
    font-size: clamp(3.5rem, 12vw, 4.5rem);
    line-height: 1;
    letter-spacing: -0.035em;
    padding: 0 0 1rem;
    margin-bottom: 0.5rem;
    overflow-wrap: anywhere;
  }

  /* Resumo e data */
  .post-description {
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    padding: 0;
  }

  /* Texto principal */
  .content {
    margin-top: 1rem;
    font-size: 1.3625rem;
    line-height: 1.75;
    text-align: left;
  }

  /* Hierarquia dos títulos internos */
  .content :deep(h1) {
    font-size: clamp(1.75rem, 7vw, 2.25rem);
    line-height: 1.2;
    margin: 2rem 0 1rem;
  }

  .content :deep(h2) {
    font-size: clamp(1.4rem, 5.5vw, 1.75rem);
    line-height: 1.3;
    margin: 1.75rem 0 0.75rem;
  }

  .content :deep(h3) {
    font-size: 1.2rem;
    line-height: 1.4;
    margin: 1.5rem 0 0.5rem;
  }

  /* Parágrafos mais confortáveis em telas estreitas */
  .content :deep(p) {
    text-align: left;
    text-indent: 1rem;
    margin-bottom: 1.1rem;
    hyphens: auto;
  }

  .content :deep(ul),
  .content :deep(ol) {
    padding-left: 1.4rem;
  }

  .content :deep(blockquote) {
    padding-left: 1rem;
    margin: 1.5rem 0;
  }

  .content :deep(img) {
    max-width: 100%;
    margin: 1.5rem auto;
  }

  .content :deep(pre) {
    max-width: 100%;
    font-size: 0.85rem;
  }
}
</style>
