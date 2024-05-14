<template>
  <section>
    <div class="section__wrapper">
      <span v-for="(navLevel, i) in navLevelsArray" :key="i">
        <router-link
          :to="navLevel.path"
          :class="{ current: i == navLevelsArray.length - 1 }"
          >{{ navLevel.name }}</router-link
        >
        <span v-if="i < navLevelsArray.length - 1"> /</span>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavLevel {
  name: string;
  path: string;
}

export default defineComponent({
  name: "ProductsNavComp",
  props: {
    navLevelsArray: {
      type: Array as () => NavLevel[],
      default: () => {
        return [{ name: "Home", path: "/" }];
      },
    },
  },
});
</script>

<style scoped>
.section__wrapper {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.section__wrapper,
a {
  font-family: "Arvo", serif;
  font-size: 0.75rem;
  font-weight: 400;
}
a.current {
  font-weight: 900;
}
</style>
