<script setup>
  const props = defineProps(['tag']);
  import {TAG_COLORS} from "~/data/tags";
  const color = TAG_COLORS[props.tag];
</script>

<template>
  <div 
    :style="{'--color': color}"
    class="tag"
  >
    {{tag}}
  </div>
</template>


<style scoped>

.tag {
  cursor: pointer;
  text-decoration: none;
  align-self: flex-start;

  padding: 0.25rem 0.5rem;

  color: white;
  background: var(--color);

  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;

  clip-path: polygon(
    4% 8%,
    98% 0,
    94% 92%,
    0 100%
  );

  transform: rotate(-2deg);

  transition: transform 150ms ease;
}

.tag:hover {
  transform: rotate(0deg) scale(1.05);
}


</style>
