<template>
  <main>
    <section class="hero">
      <div class="section__wrapper">
        <h1>404</h1>

        <p>Page not found :(</p>

        <router-link class="btn--secondary" to="/">Home of page</router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFoundView",
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
  font-size: 8rem;
}
.hero p {
  font-size: 1.45rem;
  margin-bottom: 2em;
}
</style>
