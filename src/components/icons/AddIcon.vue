<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    :height="height"
    :width="width"
    :fill="color"
  >
    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
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
  },
});
</script>
