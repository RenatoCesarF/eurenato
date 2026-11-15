
<script setup>

  const props = defineProps({
    direction: String,
    type: String,
    scale: {
      type: Number,
      default: 1
    }
  })
  const emit = defineEmits(['click']);

  let arrowImg = props.type == 'yellow' ? '/assets/letters/arrow.png' : "/assets/letters/arrow_orange.png"

</script>

<template>
  <div>
    <button
      :style="{'--arrow-scale': props.scale}"
      :class="`paper-arrow paper-arrow--${props.direction}`"
      type="button"
      aria-label="Anterior"
      @click="emit('click')"
    >
      <img
        class="paper-arrow-image"
        :src="arrowImg"
        alt=""
      />
    </button>
  </div>
</template>

<style scoped>

.paper-arrow {
  position: absolute;
  top: 50%;
  z-index: 5;

  width: calc(52px * var(--arrow-scale));
  height: calc(52px * var(--arrow-scale));
  padding: 0;

  cursor: pointer;

  background: transparent;
  border: 0;

  transform: translateY(-50%);
  transition: transform 100ms ease-in-out;
}

.paper-arrow--left {
  left: 0.75rem;
}

.paper-arrow--right {
  right: 0.75rem;
}

.paper-arrow-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 35%));

  transition:
    transform 150ms ease,
    filter 150ms ease;
}

/* Considerando que o PNG aponta para a direita */
.paper-arrow--left .paper-arrow-image {
  transform: rotate(176deg);
}

.paper-arrow--right .paper-arrow-image {
  transform: rotate(4deg);
}

.paper-arrow:hover {
  transform: translateY(-50%) scale(1.1);
}

.paper-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

/* Setas em formato de papel recortado */
.paper-arrow:active .paper-arrow-image {
  filter: drop-shadow(0 2px 2px rgb(0 0 0 / 25%));
}

.paper-arrow:focus-visible {
  border-radius: 0.25rem;
  outline: 3px solid #171717;
  outline-offset: 4px;
}

@media (max-width: 600px) {
  .paper-arrow {
    width: 52px;
    height: 52px;
  }

  .paper-arrow--left {
    left: 0.25rem;
  }

  .paper-arrow--right {
    right: 0.25rem;
  }
}

@media (max-width: 600px) {
  .paper-arrow {
    width: 48px;
    height: 38px;
  }
}

</style>
