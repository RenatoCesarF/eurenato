<template>
  <section class="about-section">
    <!-- Papel rasgado -->
    <div class="paper">
      <img
        class="paper-background"
        src="/assets/cuttings/small-paper.png"
        alt=""
      />

      <!-- Fitas presas ao papel -->
      <img
        class="tape paper-tape paper-tape-one"
        src="/assets/tapes/strait.png"
        alt=""
        aria-hidden="true"
      />


      <div class="paper-content">
        <h2 class="about-title">Sobre</h2>

        <p class="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
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

      <!-- Fita presa à foto -->
      <img
        class="tape profile-tape"
        src="/assets/tapes/rounded.png"
        alt=""
        aria-hidden="true"
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
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  isolation: isolate;

  min-height: clamp(680px, 55vw, 980px);
  overflow: hidden;

  background-color: var(--blue-bg-color);
}

/* ==================================================
   Papel
================================================== */

.paper {
  position: absolute;
  z-index: 10;

  top: 17%;
  left: 6%;

  width: 73%;
  height: clamp(300px, 25vw, 500px);

  transform: rotate(-0.4deg);
}

.paper-background {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: fill;

  pointer-events: none;
  user-select: none;

  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 8%));
}

.paper-content {
  position: absolute;
  z-index: 4;

  top: 10%;
  left: 11.5%;
  right: 5%;
  bottom: 10%;
}

.about-title {
  width: fit-content;

  margin: 0 0 0.45rem 4.5%;

  font-family: "punk4", sans-serif;
  font-size: clamp(2.8rem, 4.2vw, 5.2rem);
  font-weight: normal;
  line-height: 0.85;
  text-transform: uppercase;

  transform: rotate(-1.5deg);
}

.about-text {
  width: 80%;
  max-width: 1050px;

  margin: 0;

  color: #171717;

  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.4rem, 2.35vw, 2.9rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
}

/* ==================================================
   Foto
================================================== */

.profile-wrapper {
  position: absolute;

  top: 18%;
  right: 4vw;

  width: clamp(320px, 31vw, 620px);

  transform-origin: center;
}

.renato-picture {
  position: relative;
  z-index: 10;

  display: block;

  width: 100%;
  height: auto;

  object-fit: cover;

  user-select: none;

  filter:
    saturate(0.88)
    contrast(1.03)
    drop-shadow(0 7px 7px rgb(0 0 0 / 15%));
}

/* ==================================================
   Apoia-se
================================================== */

.support-link {
  position: absolute;
  z-index: 40;

  top: 60%;
  left: 58%;

  display: block;

  width: clamp(185px, 18vw, 260px);

  transform: translate(-50%, -50%) rotate(-2deg);
  transform-origin: center;

  transition:
    transform 160ms ease,
    filter 160ms ease;
}

.support-link:hover {
  filter: brightness(1.06);

  transform:
    translate(-50%, -50%)
    rotate(1deg)
    scale(1.035);
}

.support-image {
  display: block;

  width: 100%;
  height: auto;

  user-select: none;

  filter: drop-shadow(0 6px 5px rgb(0 0 0 / 18%));
}

/* ==================================================
   Fitas
================================================== */

.tape {
  position: absolute;
  z-index: 3;

  display: block;

  height: auto;

  pointer-events: none;
  user-select: none;

  opacity: 0.82;

  filter: drop-shadow(0 2px 1px rgb(0 0 0 / 12%));
}

/*
  As duas fitas ficam presas ao papel.
  Portanto, as posições abaixo são relativas ao próprio papel.
*/

.paper-tape-one {
  top: -20%;
  left: -8%;

  width: 27%;
}

/*
  Esta fita fica presa à foto.
  Portanto, acompanha a rotação e o tamanho da imagem.
*/

.profile-tape {
  z-index: 30;

  right: 3%;
  bottom: -10%;

  width: 46%;
}

/* ==================================================
   Mobile
================================================== */

@media (max-width: 720px) {
  .about-section {
    min-height: clamp(900px, 215vw, 1080px);
  }

  /* --------------------------------------------------
     Foto atrás do papel
  -------------------------------------------------- */

  .profile-wrapper {
    z-index: 10;

    top: 2.5rem;
    right: 5%;

    width: min(92vw, 430px);

    transform: rotate(-10deg);
  }

  .profile-tape {
    top: 5%;
    right: -16%;
    bottom: auto;

    width: 43%;

    transform: rotate(260deg);
  }

  /* --------------------------------------------------
     Papel na frente da foto
  -------------------------------------------------- */

  .paper {
    z-index: 20;

    top: clamp(255px, 68vw, 310px);
    left: -9%;

    width: 118%;
    height: clamp(360px, 96vw, 420px);

    transform: rotate(-0.7deg);
  }

  .paper-content {
    top: 14%;
    left: 12%;
    right: 10%;
    bottom: 10%;
  }

  .about-title {
    margin: 0 0 0.75rem 5%;

    font-size: clamp(2.8rem, 14vw, 4rem);
    line-height: 0.85;
  }

  .about-text {
    width: 100%;
    max-width: none;

    font-size: clamp(1.18rem, 5.4vw, 1.5rem);
    line-height: 1.1;
    letter-spacing: -0.025em;
  }

  /* --------------------------------------------------
     Fitas do papel
  -------------------------------------------------- */

  .paper-tape-one {
    top: -18%;
    left: -8%;

    width: 39%;

    transform: rotate(-28deg);
  }

  /* --------------------------------------------------
     Apoia-se no canto inferior direito
  -------------------------------------------------- */

  .support-link {
    z-index: 30;

    top: auto;
    left: auto;
    right: 0%;
    bottom:  23%;

    width: clamp(175px, 48vw, 190px);

    transform: rotate(-4deg);
  }

  .support-link:hover {
    transform: rotate(-1deg) scale(1.035);
  }
}
</style>
