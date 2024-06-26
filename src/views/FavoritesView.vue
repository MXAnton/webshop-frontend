<template>
  <main>
    <section class="hero">
      <div class="section__wrapper">
        <h1>Favorites</h1>

        <p class="long">Under development</p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FavoritesView",
});
</script>

<style scoped>
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.hero .section__wrapper > * {
  max-width: 65ch;
}
.hero h1 {
  margin-bottom: 0.2em;
}
</style>
