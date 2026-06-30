<script setup lang='ts'>
  import PaperStrip from '@/components/PaperStrip.vue'
</script>

<template>
  <PaperStrip/>
  <nav>
    <menu>

      <la class='menu-list'>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Blog</li>
      </la>
    </menu>
  </nav>
</template>


<style scoped>
.menu-list {
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 25vw;
  background: red;
}

</style>
