<template>
    <NuxtLink 
      v-for="item in items" 
      :key="item.id" 
      :to="`/projects/${item.id}`" 
    >
      <!-- IMPORTANTE: O nome da transição precisa ser único para o item selecionado -->
      <img 
        :src="item.image" 
        :alt="item.title" 
        :style="{ 'view-transition-name': `item-image-${item.id}` }" 
      />
      <h2>{{ item.title }}</h2>
    </NuxtLink>
</template>

<script setup>
const items = [
  { id: 1, title: 'Tênis Esportivo', image: '/assets/letters/A_47.png' },
  { id: 2, title: 'Mochila de Couro', image: '/assets/letters/B_21.png' }
]
</script>
