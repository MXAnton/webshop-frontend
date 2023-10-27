<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    :height="height"
    :width="width"
    :fill="color"
  >
    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z">
      <animate
        ref="animationToPlus"
        repeatCount="1"
        fill="freeze"
        attributeName="d"
        dur="500s"
        values="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
      />
      <animate
        ref="animationToMinus"
        repeatCount="1"
        fill="freeze"
        attributeName="d"
        dur="500s"
        values="M200-440v-80h560v80H200Z"
      />
    </path>
  </svg>
  <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    :height="height"
    :width="width"
    :fill="color"
  >
    <path d="M200-440v-80h560v80H200Z" />
  </svg> -->
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
  data() {
    return {
      animationToPlus: this.$refs.animationToPlus as any,
      animationToMinus: this.$refs.animationToMinus as any,
    };
  },
  watch: {
    showAddIcon(newVal) {
      if (newVal == true) {
        this.animationToPlus.beginElement();
      } else {
        this.animationToMinus.beginElement();
      }
    },
  },
  mounted() {
    this.animationToPlus = this.$refs.animationToPlus;
    this.animationToMinus = this.$refs.animationToMinus;
  },
});
</script>
