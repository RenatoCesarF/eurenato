<script setup>
</script>

<template>
  <section class="about-section">
    <!-- Papel rasgado -->
    <div class="paper">
      <img
        class="paper-background"
        src="/assets/cuttings/small-paper.png"
        alt=""
      />

      <div class="paper-content">
        <h2 class="about-title">Sobre</h2>

        <p class="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
      </div>
    </div>

    <!-- Foto -->
    <div class="profile-wrapper">
      <img
        class="renato-picture"
        src="/assets/profile.png"
        alt="Foto de Renato"
      />
    </div>

    <!-- Apoia-se -->
    <a
      class="support-link"
      href="#"
      aria-label="Acessar página do Apoia-se"
    >
      <img
        class="support-image"
        src="/assets/apoiase.png"
        alt="Apoia-se"
      />
    </a>

    <!--
      Camada reservada para fitas, rabiscos e outros recortes.
      Tudo colocado aqui ficará acima dos elementos principais.
    -->
    <div class="tape-layer" aria-hidden="true">
      <!--
      Exemplo:

      <img
        class="tape tape-profile"
        src="/assets/tapes/tape.png"
        alt=""
      />
      -->
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  isolation: isolate;
  min-height: clamp(700px, 90vh, 950px);
  overflow: hidden;

  background-color: var(--blue-bg-color);

  padding: 8rem 2rem 10vh;
}

/* ==================================================
   Papel
================================================== */

.paper {
  position: absolute;
  z-index: 10;

  top: 14%;
  left: 7%;

  width: min(76vw, 1230px);
  height: clamp(320px, 26vw, 430px);
}

.paper-background {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: fill;

  pointer-events: none;
  user-select: none;
}

.paper-content {
  position: absolute;
  z-index: 2;

  top: 8%;
  left: 11%;
  right: 6%;
  bottom: 10%;
}

.about-title {
  position: relative;

  width: fit-content;

  margin: 0 0 0.35rem;
  padding: 0;

  font-family: "punk4", sans-serif;
  font-size: clamp(3rem, 4.5vw, 5.4rem);
  font-weight: normal;
  line-height: 0.9;
  text-transform: uppercase;

  transform: rotate(-1deg);
}

.about-text {
  width: 86%;
  max-width: 1050px;

  margin: 0;

  color: #171717;

  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.7rem, 2.45vw, 3rem);
  line-height: 1.04;
  letter-spacing: -0.035em;
}

/* ==================================================
   Foto
================================================== */

.profile-wrapper {
  position: absolute;
  z-index: 30;

  top: 14%;
  right: 5%;

  width: clamp(340px, 29vw, 510px);

  transform-origin: center;
}

.renato-picture {
  display: block;

  width: 100%;
  height: auto;

  object-fit: cover;

  user-select: none;

  filter: saturate(0.85) contrast(1.02);
}

/* ==================================================
   Apoia-se
================================================== */

.support-link {
  position: absolute;
  z-index: 40;

  top: 53%;
  left: 57%;

  display: block;

  width: clamp(165px, 20vw, 260px);

  transform: translate(-20%, -50%) rotate(-1deg);
}

.support-link:hover {
  filter: brightness(1.05);
}

.support-image {
  display: block;

  width: 100%;
  height: auto;

  user-select: none;
}

/* ==================================================
   Camada para fitas e desenhos
================================================== */

.tape-layer {
  position: absolute;
  z-index: 50;
  inset: 0;

  overflow: hidden;
  pointer-events: none;
}

/*
.tape {
  position: absolute;
  display: block;
}

.tape-profile {
  width: 220px;
  right: 1%;
  bottom: 5%;
  transform: rotate(-35deg);
}
*/

/* ==================================================
   Tablet
================================================== */

@media (max-width: 1000px) {
  .about-section {
    min-height: 850px;
  }

  .paper {
    top: 13%;
    left: 2%;

    width: 88%;
    height: 390px;
  }

  .paper-content {
    left: 9%;
    right: 5%;
  }

  .about-text {
    width: 82%;
    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
  }

  .profile-wrapper {
    top: 31%;
    right: -5%;

    width: clamp(320px, 47vw, 470px);
  }

  .support-link {
    top: 67%;
    left: 47%;

    width: clamp(160px, 21vw, 220px);
  }
}

/* ==================================================
   Celular
================================================== */

@media (max-width: 650px) {
  .about-section {
    min-height: 920px;
    padding-inline: 1rem;
  }

  .paper {
    top: 6rem;
    left: -5%;

    width: 110%;
    height: 390px;
  }

  .paper-content {
    top: 12%;
    left: 12%;
    right: 10%;
    bottom: 12%;
  }

  .about-title {
    margin-bottom: 0.75rem;

    font-size: clamp(2.8rem, 15vw, 4.2rem);
  }

  .about-text {
    width: 100%;

    font-size: clamp(1.25rem, 5.8vw, 1.65rem);
    line-height: 1.08;
  }

  .profile-wrapper {
    top: 49%;
    right: -11%;

    width: min(78vw, 420px);

    transform: rotate(8deg);
  }

  .support-link {
    top: 73%;
    left: 27%;

    width: clamp(140px, 40vw, 190px);
  }
}
</style>
