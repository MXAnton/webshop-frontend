<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    :height="size"
    :width="size"
    :fill="color"
  >
    <path d="M200-440v-80h560v80H200Z" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RemoveIcon",
  props: {
    color: {
      type: String,
      default: "currentColor",
    },
    size: {
      type: String,
      default: "1em",
    },
  },
});
</script>
