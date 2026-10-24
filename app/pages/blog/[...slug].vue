<script setup lang="ts">
  const route = useRoute()

  const { data: page } = await useAsyncData('blog-' + route.path, () => {
    return queryCollection('blog').path(route.path).first()
  })

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
</script>

<template>
  <div class="bg">
    <div class="paper">
      <h1>{{page.title}}</h1>
      <p>{{page.description}}</p>
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </div>
  </div>
</template>

<style scoped>


html {
  background-color: blue;

}
.bg, body { 
  background-color: #202020;
  margin: 0;
  min-height: 100%;
  display: flex;
  justify-content: center;
}

.paper {
  background-color: #e9e6dd;
  min-height: 100vh;
  width: auto;

  color: #26231f;

  margin: 10vh clamp(0rem, 13vw, 22rem);
  text-align: left;

  text-decoration: none;
  position: relative;
  z-index: 1;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  font-family: Georgia, "Times New Roman", serif;

  padding: 2rem clamp(0.5rem, 4vw, 5rem);
}


h1{
  padding: 2rem 1.8rem 1.7rem;
  margin: 0 0 1rem;
  padding-bottom: 0.4rem;

  color: #201e1a;

  font-size: clamp(4rem, 4vw, 5.55rem);
  line-height: 0.95;
  letter-spacing: -0.045em;

  border-bottom: 4px double #292620;
}

p {
  color: #302d28;

  font-size: 1.05rem;
  line-height: 1.25;
  text-align: justify;

  hyphens: auto;
}
</style>
