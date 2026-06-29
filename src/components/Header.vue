<script setup lang="ts">
import HeaderImages from '@/components/HeaderImages.vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
</script>

<template>
  <header>
    <div class="header-bg">
      <HeaderImages/>
      <HeaderTitle/>
    </div>
  </header>
</template>

<style scoped>
.header-bg {
  position: relative;
  width: 100vw;
  max-width: 100vw;
  height: clamp(520px, 90svh, 900px);
  overflow: hidden;
  background: black;
}
</style>
