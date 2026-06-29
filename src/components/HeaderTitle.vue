<script setup lang="ts">
</script>

<template>
  <div class="header-title">
    <img class="letter e1" src="/assets/header/letters/E_06.png" alt="" />
    <img class="letter u" src="/assets/header/letters/U_20.png" alt="" />
    <img class="letter comma" src="/assets/header/letters/Comma_05.png" alt="" />
    <img class="letter r" src="/assets/header/letters/R_25.png" alt="" />
    <img class="letter e2" src="/assets/header/letters/E_25.png" alt="" />
    <img class="letter n" src="/assets/header/letters/N_05.png" alt="" />
    <img class="letter a" src="/assets/header/letters/A_47.png" alt="" />
    <img class="letter t" src="/assets/header/letters/T_05.png" alt="" />
    <img class="letter o" src="/assets/header/letters/O_26.png" alt="" />
    <img class="letter flash" src="/assets/header/letters/Flash_02.png" alt="" />
  </div>
</template>


<style scoped>

  .header-title {
    position: absolute;
    left: 50%;
    top: 50%;

    width: min(94vw, 1900px);
    aspect-ratio: 1900 / 560;

    transform: translate(-50%, -48%);
    z-index: 100;
  }

  .letter {
    position: absolute;
    height: auto;
    user-select: none;

    --rot: 0deg;
    transform: rotate(var(--rot));
  }

  .letter:hover {
    animation: shake 0.6s steps(1, end) infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(var(--rot));
    }

    25% {
      transform: translate(-6px, 5px) rotate(calc(var(--rot) - 4deg));
    }

    50% {
      transform: translate(6px, -7px) rotate(calc(var(--rot) + 5deg));
    }

    75% {
      transform: translate(-4px, -3px) rotate(calc(var(--rot) - 2deg));
    }

    100% {
      transform: translate(0, 0) rotate(var(--rot));
    }
  }

  /* Eu, Renato */
  .e1 {
    left: 0%;
    top: 3%;
    width: 14%;
    z-index: 1;
    transform: rotate(0deg);
  }

  .u {
    left: 12.3%;
    top: 22%;
    width: 11%;
    z-index: 4;
    transform: rotate(0deg);
  }

  .comma {
    left: 19.2%;
    top: 64%;
    width: 7.2%;
    z-index: 10;
    transform: rotate(3deg);
  }

  .r {
    left: 28%;
    top: 13%;
    width: 20%;
    z-index: 3;
    transform: rotate(0deg);
  }

  .e2 {
    left: 43.3%;
    top: 36%;
    width: 14.2%;
    z-index: 6;
    transform: rotate(7deg);
  }

  .n {
    left: 55.5%;
    top: 25%;
    width: 14.5%;
    z-index: 7;
    transform: rotate(-4deg);
  }

  .a {
    left: 67.2%;
    top: 50%;
    width: 10.8%;
    z-index: 8;
    transform: rotate(3deg);
  }

  .t {
    left: 75.6%;
    top: 20%;
    width: 12.3%;
    z-index: 9;
    transform: rotate(3deg);
  }

  .o {
    left: 86.1%;
    top: 39%;
    width: 15.8%;
    z-index: 10;
    transform: rotate(6deg);
  }

  .flash {
    left: 85.4%;
    top: -5%;
    width: 7.8%;
    z-index: 11;
    transform: rotate(13deg);
  }
</style>
