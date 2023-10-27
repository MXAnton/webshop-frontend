<template>
  <section>
    <div class="section__wrapper">
      <span v-for="(navLevel, i) in navLevelsArray" :key="i">
        <router-link
          :to="'/' + (navLevel as string).toLowerCase()"
          :class="{ current: i == navLevelsArray.length - 1 }"
          >{{ navLevel }}</router-link
        >
        <span v-if="i < navLevelsArray.length - 1"> /</span>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsNavComp",
  props: {
    navLevelsArray: {
      type: Array,
      default: () => {
        return ["Home"];
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
