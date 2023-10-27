<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :height="height"
    :width="width"
    :class="{ 'is-add': showAddIcon }"
  >
    <line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      stroke-width="2"
      :stroke="color"
      class="plus"
    ></line>
    <line
      x1="12"
      y1="5"
      x2="12"
      y2="19"
      stroke-width="2"
      :stroke="color"
      class="minus"
    ></line>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddIcon",
  props: {
    color: {
      type: String,
      default: "currentColor",
    },
    width: {
      type: String,
      default: "16px",
    },
    height: {
      type: String,
      default: "16px",
    },
    showAddIcon: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
svg {
  transform: rotateZ(180deg);
  transition: transform 0.2s ease-in-out;
}
.minus {
  transform: rotateZ(90deg);

  transform-origin: center center;
  transition: transform 0.2s ease-in-out;
}
.is-add {
  transform: rotateZ(0deg);
}
.is-add .minus {
  transform: rotateZ(0deg);
}
</style>
