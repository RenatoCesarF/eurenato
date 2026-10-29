<script setup lang="ts">
  const route = useRoute()
  const router = useRouter()

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
        <button>
          No Textures
        </button>

        <button>
          Change Read mode
        </button>
      </div>
    </div>

    <div class="paper">
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
  display:flex;
  flex-direction: column;

}

.blog-header{
  display:flex;
  padding: 2vh 2rem;
  height: 10vh;
  justify-content: center;
	align-items: center;
  gap:60%;
}

.blog-header .configuration{
  display: flex;
  gap: 1rem;
}

.paper-arrow {
  top: 50%;
  z-index: 5;

  transform: rotate(266deg);
  width: 52px;
  height: 52px;
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
  color: #1A1A1A;

  margin: 0 10rem;
  padding: 2rem clamp(4rem, 5vw, 50vw);

  flex: 1;
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

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-title {
  font-family: jornal-body, serif;
  padding: 2rem;
  padding-top: 0rem;
  padding-bottom: 2rem;
  margin: 0 0 1rem;

  color: #201e1a;

  font-size: clamp(9rem, 7vw, 5.55rem);
  line-height: 0.85;
  letter-spacing: -0.045em;

  border-bottom: 4px double #292620;

  text-align: center;
}

.post-description {
  color: #302d28;
  font-size: 1.5rem;
  line-height: 1.25;
  text-align: justify;

  hyphens: auto;
  padding: 0 3rem;
}

.content {
  margin-top: 3rem;
  font-family: jornal-body, serif;
  font-size: 1.6rem;
  line-height: 1.7;
  color: #26231f;
  text-align: justify;
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3) {
  font-family: jornal-body, serif;
  color: #201e1a;
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
}

.content :deep(h1) {
  font-size: 3.0rem;
  margin: 3rem 0 1.5rem;
}

.content :deep(h2) {
  font-size: 2rem;
  margin: 2.5rem 0 1rem;
  border-bottom: 1px solid #292620;
  padding-bottom: 0.4rem;
}

.content :deep(h3) {
  font-size: 1.5rem;
  margin: 2rem 0 0.75rem;
}

/* Parágrafos */
.content :deep(p) {
  text-align: justify;
  margin: 0 0 1.5rem;
  hyphens: auto;
  text-indent: 2rem;
}

/* Links */
.content :deep(a) {
  color: #6b3425;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Listas */
.content :deep(ul),
.content :deep(ol) {
  padding-left: 2rem;
  margin-bottom: 1.5rem;
}

.content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Citações */
.content :deep(blockquote) {
  border-left: 4px double #292620;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #50483e;
}

/* Imagens */
.content :deep(img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 2rem auto;
}

/* Código */
.content :deep(pre),
.content :deep(code) {
  font-family: monospace;
}

.content :deep(pre) {
  overflow-x: auto;
  padding: 1rem;
  background: #dcd7cb;
}
</style>
