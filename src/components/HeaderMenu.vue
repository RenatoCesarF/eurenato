<script setup lang='ts'>
  import PaperStrip from '@/components/PaperStrip.vue'
</script>

<template>
  <nav class="header-menu">
    <PaperStrip />

    <menu class="menu">
      <ul class="menu-list">
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Blog</li>
      </ul>
    </menu>
  </nav>
</template>


<style scoped>
.header-menu {
  position: relative;
  width: 100%;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  overflow: visible;
  isolation: isolate;
  background: green;
}

.menu {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
}
.menu-list {
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 25vw;
}

</style>
