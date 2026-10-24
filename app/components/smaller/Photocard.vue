<script setup>
  const props = defineProps(['title', 'image', 'rotation', 'offset']);
</script>

<template>
  <div
    class="card"
    :style="{
      '--rotation': `${props.rotation}deg`,
      '--offset': `${props.offset}px`,
    }"
  >
    <div class="visual">
      <img
        class="card-image"
        :src="props.image"
        :alt="`Imagem do projeto ${props.title}`"
      />
    </div>

    <div class="content">
      <h3>{{ props.title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  min-height: 300px;
  padding: 1rem 1rem 0.75rem;

  color: #171717;
  background-color: #E3EDdd;
  background-image:
    radial-gradient(
      circle at 20% 30%,
      rgb(90 68 42 / 12%) 0 0.6px,
      transparent 0.9px
    ),
    radial-gradient(
      circle at 70% 65%,
      rgb(255 255 255 / 65%) 0 0.7px,
      transparent 1px
    ),
    linear-gradient(
      115deg,
      rgb(255 255 255 / 35%),
      transparent 45%,
      rgb(70 48 24 / 4%)
    );

  background-size:
    9px 11px,
    13px 15px,
    100% 100%;

  border: 1px solid rgb(70 50 25 / 12%);
  border-radius: 0.15rem;

  box-shadow:
    0 8px 10px rgb(0 0 0 / 28%),
    0 4px 8px rgb(0 0 0 / 18%);

  scroll-snap-align: start;

  transform:
    translateY(var(--offset))
    rotate(var(--rotation));

  transform-origin: center;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.card:hover {
  z-index: 2;

  transform:
    translateY(calc(var(--offset) - 8px))
    rotate(0deg);

  box-shadow:
    0 14px 18px rgb(0 0 0 / 32%),
    0 6px 10px rgb(0 0 0 / 20%);
}

/* Moldura da fotografia */
.visual {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;

  background: #272727;
}

/* Sombra colocada sobre a imagem */
.visual::after {
  position: absolute;
  inset: 0;
  z-index: 1;

  content: "";
  pointer-events: none;

  box-shadow:
    inset 0 0 5px rgb(0 0 0 / 45%),
    inset 0 0 20px rgb(0 0 0 / 48%);
}

.card-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  min-height: 68px;
  padding: 0.8rem 0.5rem 0.25rem;
}

.content h3 {
  margin: 0;

  font-size: 1.5rem;
  text-align: center;
}
</style>
