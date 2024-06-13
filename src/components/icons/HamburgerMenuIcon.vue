<template>
  <svg
    :width="size"
    :height="size"
    :class="{ 'is-cross': isCross }"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="line-center"
      d="M4.0625 13H21.9375"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
    <path
      class="line-top"
      d="M4.0625 6.5H21.9375"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
    <path
      class="line-bottom"
      d="M4.0625 19.5H21.9375"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "1.625rem",
    },

    isCross: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style scoped>
.line-top,
.line-center,
.line-bottom {
  transform: translateY(0) translateX(0%) scaleX(100%) rotateZ(0deg);
  transform-origin: center;

  opacity: 1;

  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out;
}

.is-cross .line-top,
.is-cross .line-center,
.is-cross .line-bottom {
  transition: transform 0.2s ease-in-out, opacity 0.1s ease-in-out;
}
.is-cross .line-top {
  transform: translateY(18%) translateX(-18%) rotateZ(45deg) scaleX(120%);
}
.is-cross .line-center {
  opacity: 0;
}
.is-cross .line-bottom {
  transform: translateY(-18%) translateX(-18%) rotateZ(-45deg) scaleX(120%);
}
</style>
