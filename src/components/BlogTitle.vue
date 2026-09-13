
<script setup>

</script>

<template>
  <div class="blog-wrapper">
    <div class="blog-title">
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
  width: clamp(180px, 30vw, 350px);
  top: -5vw;
  right: 15vw;

  z-index: 1;
}

.blog-title {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  isolation: isolate;
  padding: 18px 42px 22px 34px;
}

/* fundo vermelho irregular */
.blog-title::before {
content: "";
  position: absolute;
  left: -2%;
  right: 0%;
  top: -4%;
  height: 108%;
  background: #cf2027;
  transform: none;
  clip-path: polygon(5.02% 4.95%, 93.97% 28.83%, 86.99% 78.89%, 3.57% 92.72%);
  width: 118%;
}

/* letras recortadas */
.letter {
  display: block;
  object-fit: contain;
  position: relative;
}

.letter-b {
  width: clamp(120px, 18vw, 230px);
  z-index: 4;
  transform: rotate(-1deg);
}

.letter-l {
  width: clamp(90px, 10vw, 160px);
  margin-left: -20px;
  z-index: 3;
  transform: rotate(1deg) translateY(2px);
}

.letter-o {
  width: clamp(90px, 10vw, 180px);
  margin-left: -10px;
  z-index: 5;
  transform: rotate(-2deg) translateY(4px);
}

.letter-g {
  width: clamp(95px, 10vw, 160px);
  margin-left: -6px;
  z-index: 6;
  transform: rotate(4deg) translateY(10px);
}


@media (max-width: 600px) {
  .blog-title {
    padding-inline: 21px;
  }

  .letter-l {
    margin-left: -19px;
  }

  .letter-o {
    margin-left: -9px;
  }

  .letter-g {
    margin-left: -7px;
  }

  .vessel {
    right: -3rem;
  }
}
</style>
