<script setup lang='ts'>
  import PaperStrip from '@/components/PaperStrip.vue'
</script>

<template>
  <nav class="header-menu">
    <PaperStrip />

    <menu class="menu">
      <ul class="menu-list">
        <li class="tag tag-blue">
          <span class="first-letter">s</span>
          <span>obre</span>
        </li>
        <li class="tag tag-yellow">
          <span class="first-letter">p</span>
          <span>rojetos</span>
        </li>
        <li class="tag tag-red">
          <span class="first-letter">b</span>
          <span>log</span>
        </li>
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
  gap: clamp(32px, 13vw, 200px);
}

.tag {
  position: relative;
  padding: 10px 34px;
  color: white;
  font-family: punk4;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1;
  letter-spacing: 2px;
  cursor: pointer;
  white-space: nowrap;

  background: var(--tag-color);
  clip-path: polygon(4% 0%, 100% 10%, 95% 100%, 0% 82%);
}

.tag:hover {
  scale: 1.2;
  filter: drop-shadow(30px 10px 4px #4444dd);
}

.tag span {
  display: inline-block;
  transform: skew(-4deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.35);
}

.first-letter {
  font-family: punk2;
}

/* Azul */
.tag-blue {
  --tag-color: #1c145f;
  transform: rotate(-10deg);
  botto: 10px;
}

/* Amarelo */
.tag-yellow {
  --tag-color: #e7bd00;
  color: #262626;
  transform: rotate(3deg);
  clip-path: polygon(8% 0%, 100% 6%, 94% 100%, 0% 88%);
}

/* Vermelho */
.tag-red {
  --tag-color: #c92323;
  transform: rotate(-2deg);
  clip-path: polygon(0% 6%, 96% 0%, 100% 100%, 10% 96%);
}


@media (max-width: 700px) {
  .menu-list {
    gap: clamp(1px, 5vw, 120px);
    padding-inline: 16px;
  }

  .tag {
    padding: 8px 18px;
    font-size: clamp(1.4rem, 7vw, 2.4rem);
  }
}

</style>
