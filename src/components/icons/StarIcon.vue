<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    :height="height"
    :width="width"
    :fill="color"
  >
    <path
      d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"
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
    width: {
      type: String,
      default: "16px",
    },
    height: {
      type: String,
      default: "16px",
    },
  },
});
</script>
