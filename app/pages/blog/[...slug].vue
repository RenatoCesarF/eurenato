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
  <div class="tet"></div>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<style scoped>
.tet {
  background-color: red;

  height: 100px;
  width: 100px;
}
</style>
