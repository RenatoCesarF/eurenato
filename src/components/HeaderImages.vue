<script setup>

</script>

<template>
    <img class="header-image black-white" src="/assets/header/renatos/black-white.png" alt="" />
    <img class="header-image purple-red" src="/assets/header/renatos/purple-red.png" alt="" />
    <img class="header-image purple-yellow" src="/assets/header/renatos/purple-yellow.png" alt="" />
    <img class="header-image red" src="/assets/header/renatos/red.png" alt="" />
    <img class="header-image blue" src="/assets/header/renatos/blue.png" alt="" />
    <img class="header-image yellow" src="/assets/header/renatos/yellow.png" alt="" />
</template>


<style scoped>
.header-image {
  position: absolute;
  height: auto;
  user-select: none;
  pointer-events: none;
  transform-origin: center;
}

/* Rosto grande à esquerda */
.red {
  left: -15%;
  top: -40%;
  width: 83%;
  z-index: 1;
  transform: rotate(-10deg);
}

/* Rosto rosa/vermelho no topo */
.purple-red {
  left: -17%;
  top: -16%;
  width: 64%;
  z-index: 4;
  transform: rotate(-8deg);
}

/* Imagem grande amarela/marrom ao fundo, lado direito */
.yellow {
  left: 44%;
  top: -22%;
  width: 63%;
  z-index: 2;
}

/* Foto preto e branco principal */
.black-white {
  left: 18%;
  bottom: -30%;
  width: 55%;
  z-index: 10;
  transform: rotate(0deg);
}

/* Foto roxa/amarela da direita */
.purple-yellow {
  right: -8%;
  bottom: -40%;
  width: 46%;
  z-index: 12;
  transform: rotate(6deg);
}

.blue {
  right: 0%;
  bottom: -40%;
  width: 46%;
  z-index: 2;
  transform: rotate(6deg);
}

/* @media (max-width: 768px) { */
/*   .header-bg { */
/*     height: clamp(500px, 75svh, 720px); */
/*   } */
/* } */

/* ========================= */
/* TELAS MÉDIAS / TABLET */
/* ========================= */

@media (max-width: 1100px) {
  .header-bg {
    height: clamp(500px, 78svh, 760px);
  }

  .red {
    left: -43%;
    top: -17%;
    width: 95%;
    z-index: 5;
    transform: rotate(-34deg);
  }

  .purple-red {
    left: 5%;
    top: -18%;
    width: 68%;
    z-index: 4;
    transform: rotate(18deg);
  }

  .yellow {
    left: 43%;
    top: -15%;
    width: 82%;
    z-index: 2;
  }

  .black-white {
    left: 19%;
    bottom: -5%;
    width: 50%;
    z-index: 10;
    transform: rotate(0deg);
  }

  .purple-yellow {
    right: -20%;
    bottom: -30%;
    width: 52%;
    z-index: 12;
    transform: rotate(6deg);
  }

  .blue {
    right: -12%;
    bottom: -34%;
    width: 62%;
    z-index: 2;
    transform: rotate(6deg);
  }
}


/* ========================= */
/* CELULAR */
/* ========================= */

@media (max-width: 768px) {
  .header-bg {
    height: clamp(420px, 68svh, 560px);
  }

  .red {
    left: -75%;
    top: 10%;
    width: 150%;
    z-index: 5;
    transform: rotate(-30deg);
  }

  .purple-red {
    left: -8%;
    top: -33%;
    width: 78%;
    z-index: 2;
    transform: rotate(-20deg);
  }

  .yellow {
    left: 42%;
    top: -22%;
    width: 125%;
    z-index: 2;
  }

  .black-white {
    left: 10%;
    bottom: -18%;
    width: 60%;
    z-index: 10;
    transform: rotate(0deg);
  }

  .purple-yellow {
    right: -24%;
    bottom: -32%;
    width: 62%;
    z-index: 12;
    transform: rotate(6deg);
  }

  .blue {
    right: -0%;
    bottom: -0%;
    width: 80%;
    z-index: 0;
    transform: rotate(6deg);
  }
}


/* ========================= */
/* CELULAR PEQUENO */
/* ========================= */

@media (max-width: 480px) {
  .header-bg {
    height: clamp(380px, 62svh, 500px);
  }

  .red {
    left: -82%;
    top: 15%;
    width: 165%;
  }

  .purple-red {
    left: -10%;
    top: -20%;
    width: 86%;
  }

  .yellow {
    left: 38%;
    top: -10%;
    width: 140%;
  }

  .black-white {
    left: 8%;
    bottom: -10%;
    width: 78%;
  }

  .purple-yellow {
    right: -35%;
    bottom: -18%;
    width: 72%;
  }

  .blue {
    right: 16%;
    bottom: -8%;
    width: 90%;
  }
}

</style>
