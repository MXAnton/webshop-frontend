<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :width="width"
    viewBox="0 -960 960 960"
    :fill="color"
  >
    <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExpandMoreIcon",
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
