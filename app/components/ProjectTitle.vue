<script setup>

</script>

<template>
  <div class="project-title">
    <NuxtImg src="/assets/paper-cuts/angel.png" format="webp" quality="80" loading="lazy" class="letter angel" />
    <NuxtImg src="/assets/letters/P_07.png" format="webp" quality="80" loading="lazy" class="letter p" />
    <NuxtImg src="/assets/letters/R_17.png" format="webp" quality="80" loading="lazy" class="letter r" />
    <NuxtImg src="/assets/letters/O_08.png" format="webp" quality="80" loading="lazy" class="letter o1" />
    <NuxtImg src="/assets/letters/J_12.png" format="webp" quality="80" loading="lazy" class="letter j" />
    <NuxtImg src="/assets/letters/E_01.png" format="webp" quality="80" loading="lazy" class="letter e" />
    <NuxtImg src="/assets/letters/T_20.png" format="webp" quality="80" loading="lazy" class="letter t" />
    <NuxtImg src="/assets/letters/O_13.png" format="webp" quality="80" loading="lazy" class="letter o2" />
    <NuxtImg src="/assets/letters/S_06.png" format="webp" quality="80" loading="lazy" class="letter s" />
  </div>
</template>

<style scoped>
  .project-title {
    position: relative;
    width: min(100%, 832px);
    aspect-ratio: 832 / 254;
    overflow: visible;
  }

  /* fundo amarelo irregular */
  .project-title::before {
    content: "";
    position: absolute;
    left: 1%;
    top: 9%;
    width: 97.4%;
    height: 81%;
    background: #e4cf00;
    z-index: 1;
    clip-path: polygon(
      1.98% 27.32%,
      99.14% 1%,
      99.6% 110%,
      0.4% 91%
    );
  }

  .letter {
    position: absolute;
    z-index: 2;
    display: block;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }

  .angel {
    width: 56.2%;
    top: -110%;
    z-index: 0;
  }

  /* P grande, alto e largo */
  .p {
    left: 7.3%;
    top: 10.5%;
    width: 16.2%;
    z-index: 3;
  }

  /* R menor, sobreposto ao P */
  .r {
    left: 16.9%;
    top: 25.5%;
    width: 14.6%;
    z-index: 5;
  }

  /* primeiro O, mais baixo e maior que o R */
  .o1 {
    left: 25.7%;
    top: 40.5%;
    width: 13.8%;
    z-index: 6;
  }

  /* J é a letra mais alta, quase atravessa tudo */
  .j {
    left: 35.4%;
    top: -1.5%;
    width: 11.7%;
    z-index: 4;
  }

  /* E roxo, largo e baixo */
  .e {
    left: 45.1%;
    top: 40.5%;
    width: 15.0%;
    z-index: 7;
  }

  /* T bem grande, alto, atrás do O */
  .t {
    left: 55.1%;
    top: 12.2%;
    width: 20.2%;
    z-index: 5;
  }

  /* segundo O, tamanho médio */
  .o2 {
    left: 69.4%;
    top: 39.7%;
    width: 15.8%;
    z-index: 6;
  }

  /* S um pouco menor e mais para cima */
  .s {
    left: 81.1%;
    top: 40.8%;
    width: 16.6%;
    z-index: 8;
  }
</style>
