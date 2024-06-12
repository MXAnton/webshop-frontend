<template>
  <svg
    :height="size"
    :width="size"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.06683 73.1666L0.833496 65.9333L29.7668 36.9999L0.833496 8.06659L8.06683 0.833252L37.0002 29.7666L65.9335 0.833252L73.1668 8.06659L44.2335 36.9999L73.1668 65.9333L65.9335 73.1666L37.0002 44.2333L8.06683 73.1666Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CrossIcon",
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
