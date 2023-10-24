<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    :height="height"
    :width="width"
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
