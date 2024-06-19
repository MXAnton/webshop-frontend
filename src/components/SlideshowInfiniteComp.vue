<template>
  <div class="slideshow">
    <ul class="slideshow__items" ref="items">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlideshowInfiniteComp",

  data() {
    return {};
  },

  mounted() {
    const items = this.$refs.items as HTMLDivElement;
    const itemsCount = items.children.length;
    for (let i = 0; i < itemsCount; i++) {
      const element = items.children[i];

      // Clone the selected element
      const clonedElement = element.cloneNode(true); // 'true' means a deep clone including child nodes

      // Append the cloned element to the parent element
      items.appendChild(clonedElement);
    }
  },
});
</script>

<style scoped>
@keyframes moveSlideshow {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.slideshow {
  width: 100%;
  overflow: hidden;
  position: relative;

  margin: 0 auto;
}
.slideshow::before,
.slideshow::after {
  content: "";
  position: absolute;
  top: 0;
  width: 6rem; /* Adjust width as needed */
  height: 100%;
  z-index: 1;
}

.slideshow::before {
  left: 0;
  background: linear-gradient(to right, var(--color-background), transparent);
}

.slideshow::after {
  right: 0;
  background: linear-gradient(to left, var(--color-background), transparent);
}

.slideshow__items {
  margin: 0 auto;

  transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */

  min-width: 200%;
  width: fit-content;

  display: flex;
  justify-content: space-around;
  animation: moveSlideshow 14s infinite linear;
}
</style>
