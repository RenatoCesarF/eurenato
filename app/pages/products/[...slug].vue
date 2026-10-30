<template>
  <div class="detail-container">
    <NuxtLink to="/">← Voltar</NuxtLink>

    <div v-if="currentItem">
      <!-- O view-transition-name agora é gerado dinamicamente com o ID da rota -->
      <img 
        :src="currentItem.image" 
        :alt="currentItem.title" 
        class="detail-image"
        :style="{ viewTransitionName: `item-image-${currentItem.id}` }"
      />

      <h1>{{ currentItem.title }}</h1>
      <p>{{ currentItem.description }}</p>
    </div>

    <div v-else>
      <p>Item não encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const slugParam = Array.isArray(route.params.slug) 
  ? route.params.slug[route.params.slug.length - 1] 
  : route.params.slug

const itemId = Number(slugParam)

// Exemplo de lista de itens (substitua pela sua busca/API real)
const items = [
  { id: 1, title: 'Tênis Esportivo', image: '/assets/letters/A_47.png', description: 'Tênis ideal para corridas e treinos diários.' },
  { id: 2, title: 'Mochila de Couro', image: '/assets/letters/B_21.png', description: 'Tênis ideal para corridas e treinos diários.' },  { id: 2, title: 'Mochila de Couro', image: '/assets/letters/B_21.png' }
]

// Encontra o item correspondente ao ID passado na URL
const currentItem = computed(() => {
  return items.find(item => item.id === itemId)
})
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.detail-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-top: 1rem;
}
</style>
