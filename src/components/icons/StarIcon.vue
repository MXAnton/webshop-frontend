<template>
  <svg
    :height="size"
    :width="size"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.85 16.0721L10 14.0721L13.15 16.0984L12.325 12.3089L15.1 9.78259L11.45 9.44048L10 5.86153L8.55 9.41417L4.9 9.75627L7.675 12.3089L6.85 16.0721ZM3.825 20.4668L5.45 13.0721L0 8.09838L7.2 7.44048L10 0.466797L12.8 7.44048L20 8.09838L14.55 13.0721L16.175 20.4668L10 16.5457L3.825 20.4668Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StarIcon",
  props: {
    color: {
      type: String,
      default: "currentColor",
    },
    size: {
      type: String,
      default: "1rem",
    },
  },
});
</script>
