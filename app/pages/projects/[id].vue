
<script setup>
import { computed } from 'vue'
import { projects } from '~/data/projects'
import Photocard from '~/components/smaller/Photocard.vue'

const route = useRoute()
const router = useRouter()

definePageMeta({
  pageTransition: false,
  layoutTransition: false,
  viewTransition: true,
})

const project = computed(() => {
  return projects.find(
    item => item.id === Number(route.params.id)
  )
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projeto não encontrado',
  })
}

function closeProject() {
  const previousPath = window.history.state?.back

  if (
    typeof previousPath === 'string' &&
    previousPath.split(/[?#]/)[0] === '/'
  ) {
    router.back()
    return
  }

  router.replace('/')
}
</script>

<template>
  <main class="project-detail" @click="closeProject">
      <section
        class="detail-content"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`project-title-${project.id}`"
      >

        <!-- Polaroid -->
        <div class="detail-image-column">

            <div
              class="shared-photocard shared-photocard--detail"
              :style="{
                viewTransitionName: `item-image-${project.id}`
              }"
            >
            <Photocard
              :title="project.title"
              :image="project.image"
              :rotation="project.rotation"
              :offset="project.offset"
              :id="project.id"
            />
          </div>

        </div>

        <!-- Folha de apresentação -->
        <article class="project-paper">
        <button
          type="button"
          class="close-button"
          aria-label="Fechar"
          @click="closeProject">
            ×
          </button>

          <h1 :id="`project-title-${project.id}`">
            {{ project.title }}
          </h1>

          <div class="paper-divider"></div>

          <p>{{ project.description }}</p>

          <a
            v-if="project.link !== '#'"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-external-link"
          >
            Conhecer projeto →
          </a>

          <footer>
            <span>ARQUIVO DE PROJETOS</span>
          </footer>

        </article>

      </section>

  </main>
</template>

<style>
.project-detail {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: grid;
  place-items: center;

  width: 100%;
  min-height: 100dvh;

  background: var(--blue-bg-color);

  background-image: url('/assets/paper-background.png');
  background-position: top center;
  background-repeat: no-repeat repeat;
  background-size: 100% auto;

  background-blend-mode: multiply;

  overflow-y: auto;
}

.project-detail::before {
  content: '';

  position: absolute;
  inset: 0;
  z-index: 0;

  pointer-events: none;

  background-image: url('/assets/noise.png');
  background-position: top left;
  background-repeat: repeat;
  background-size: 512px 512px;

  border-radius: inherit;

  mix-blend-mode: soft-light;
  opacity: 0.4;
}

/* Grupo central */
.detail-content {
  position: relative;
  z-index: 1;

  width: min(100%, 1000px);

  display: grid;

  grid-template-columns:
    minmax(220px, 360px)
    minmax(280px, 420px);

  align-items: center;
  justify-content: center;

  gap: clamp(25px, 5vw, 65px);

  margin: auto;
}

/* Coluna da Polaroid */
.detail-image-column {
  display: grid;
  place-items: center;
  min-width: 0;
}

.close-button {
  background: transparent;
  border: none;
  cursor: pointer;
}

/*
 * Aumenta a foto no estado final.
 * O navegador animará a geometria entre
 * a posição original e esta posição.
 */
.shared-photocard--detail {
  -webkit-transform: scale(1.12);
  /* transform: scale(1.12); */
  transform-origin: center;
}

/* Folha */
.project-paper {
  position: relative;

  width: 100%;
  min-height: 400px;

  padding: 45px;

  background: #f4ecd8;
  color: #29251f;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);

  view-transition-name: project-paper;
}

.project-paper small {
  display: block;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 2px;
  color: #827866;
}

.project-paper h1 {
  margin: 30px 0 20px;

  font-family: Georgia, serif;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: normal;
}

.paper-divider {
  width: 45px;
  height: 2px;
  margin-bottom: 25px;
  background: #a99b80;
}

.project-paper p {
  font-family: Georgia, serif;
  font-size: 16px;
  line-height: 1.8;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 20px;

  font-size: 30px;
  text-decoration: none;
  color: #29251f;
}

.project-external-link {
  display: inline-block;
  margin-top: 20px;
  color: inherit;
}

.project-paper footer {
  margin-top: 45px;
  padding-top: 15px;
  border-top: 1px solid #cfc5af;

  font-family: monospace;
  font-size: 10px;
  letter-spacing: 2px;
  color: #827866;
}

/* Responsividade */
@media (max-width: 750px) {
  .project-detail {
    place-items: start center;
    padding: 45px 20px;
  }

  .detail-content {
    width: min(100%, 420px);

    grid-template-columns: 1fr;
    gap: 30px;
  }

  .shared-photocard--detail {
    transform: scale(1.04);
  }

  .project-paper {
    min-height: auto;
    padding: 35px 25px;
  }
}
</style>
