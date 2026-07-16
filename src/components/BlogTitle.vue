
<script setup>

</script>

<template>
  <div class="blog-wrapper">
    <div class="project-title">
      <img class="letter letter-b" src="/assets/letters/B_21.png" alt="B" />
      <img class="letter letter-l" src="/assets/letters/L_04.png" alt="L" />
      <img class="letter letter-o" src="/assets/letters/O_01.png" alt="O" />
      <img class="letter letter-g" src="/assets/letters/G_22.png" alt="G" />
    </div>
      <img class="vessel" src="/assets/paper-cuts/planta.png"
  </div>
</template>

<style scoped>
.blog-wrapper {
  width: 100%;
  overflow-x: clip;
  position: relative;
}

.vessel {
  position: absolute;
  width: 35%;
  top: -45%;
  right: 2vw;
}

.project-title {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 18px 42px 22px 34px;
  isolation: isolate;
}

/* fundo vermelho irregular */
.project-title::before {
content: "";
  position: absolute;
  left: -2%;
  right: 0%;
  top: -4%;
  height: 108%;
  background: #cf2027;
  z-index: -1;
  transform: none;
  clip-path: polygon(4.39% 8.52%, 95.26% 28.4%, 90.73% 77.73%, 3.72% 89.91%);
  width: 118%;
}

/* letras recortadas */
.letter {
  display: block;
  object-fit: contain;
  position: relative;
}

.letter-b {
  width: clamp(120px, 24vw, 260px);
  z-index: 4;
  transform: rotate(-1deg);
}

.letter-l {
  width: clamp(90px, 15vw, 180px);
  margin-left: -38px;
  z-index: 3;
  transform: rotate(1deg) translateY(2px);
}

.letter-o {
  width: clamp(90px, 15vw, 170px);
  margin-left: -18px;
  z-index: 5;
  transform: rotate(-2deg) translateY(4px);
}

.letter-g {
  width: clamp(95px, 16vw, 185px);
  margin-left: -12px;
  z-index: 6;
  transform: rotate(4deg) translateY(10px);
}


@media (max-width: 600px) {
  .project-title {
    padding-inline: 22px;
  }

  .letter-l {
    margin-left: -24px;
  }

  .letter-o {
    margin-left: -12px;
  }

  .letter-g {
    margin-left: -10px;
  }
}
</style>
