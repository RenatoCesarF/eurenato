<template>
    <NuxtLink 
      v-for="item in items" 
      :key="item.id" 
      :to="`/projects/${item.id}`" 
    >
      <!-- IMPORTANTE: O nome da transição precisa ser único para o item selecionado -->
      <ul ref="carousel" class="cards">
        <li
          v-for="project in projects"
          :key="project.id"
        class="card"
        >

          <NuxtLink :to="`/projects/${project.id}`">
            <Photocard
              :style="{'view-transition-name': `item-image-${project.id}`}"
              :title="project.title" 
              :image="project.image" 
              :rotation="project.rotation" :offset="project.offset" :id="project.id" />
          </NuxtLink>
        </li>

      </ul>
    </NuxtLink>
</template>

<script setup>

import Photocard from '../components/smaller/Photocard.vue'
const items = [
  { id: 1, title: 'Tênis Esportivo', image: '/assets/letters/A_47.png' },
  { id: 2, title: 'Mochila de Couro', image: '/assets/letters/B_21.png' }
]

const projects = [
  {
    id: 1,
    title: 'Mércure',
    description: 'Uma empresa que abri com alguns colegas pra realizar projetos de software juntos, aprender a coordenar e organizar time, além de criar experiência com todo o processo de software, da idealização, aos requisitos, a precificação e a hospedagem',
    image: '/assets/projects/project-1.png',
    link: '#',
    rotation: -2.5,
    offset: 8,
  },
  {
    id: 2,
    title: 'Interpreteoteca',
    description: 'Um podcast onde levanto alguns pensamentos, interpretações e discussões sobre as obras que li recentemente. Atualmente faço um episódio por ano. Disponíel em todas as plataformas',
    image: '/assets/projects/interpreteoteca.webp',
    link: '#',
    rotation: 1.8,
    offset: 0,
  },
  {
    id: 3,
    title: 'Self-Hosting',
    description: 'Comecei a estudar e praticar self hosting pra buscar uma independência dos serviços e assinaturas do mundo digital governado pelas big techs. Compartilho o processo como uma forma de documentação e incentivo pra outras pessoas fazerem o mesmo. Eventualmente quero transformar isso em algo maior, mas atualmente é um projeto pequeno',
    image: '/assets/projects/self-hosting.jpg',
    link: '#',
    rotation: -1.2,
    offset: 12,
  },
  {
    id: 4,
    title: 'Eu, Renato',
    description: 'O projeto pra unir meus outros projetos e servir como uma janela pras minhas produções, além dos meus textos mais políticos',
    image: '/assets/projects/eu-renato.png',
    link: '#',
    rotation: 2.7,
    offset: 4,
  },
  {
    id: 5,
    title: 'Mentoria Compassos',
    description: 'A junção de vários ideias, pensamentos, filosofias e formas de trabalhar pra manter-se feliz, produtir mais e buscar uma satisfação na carreira. Montei essa mentoria pra ajudar pessoas da área a alcançarem o que querem e não se perderem de seus objetivos',
    image: 'assets/projects/compassos.png',
    link: '#',
    rotation: -1.9,
    offset: 10,
  },
  {
    id: 5,
    title: 'Futuro Album',
    description: 'Em breve.',
    image: '/assets/projects/none.png',
    link: '#',
    rotation: -1.9,
    offset: 10,
  },
] </script>

<style scoped>
.card { width: 250px}

</style>
