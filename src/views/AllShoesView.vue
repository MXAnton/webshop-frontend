<template>
  <main>
    <section class="select-gender">
      <div class="section__wrapper">
        <h1 class="h2-size">FIND YOUR SHOES</h1>

        <div class="select-gender__buttons">
          <router-link to="/men" class="btn--primary">Men</router-link>
          <router-link to="/women" class="btn--primary">Women</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AllShoesView",
});
</script>

<style scoped>
.section__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding-top: 4rem;
  padding-bottom: 4rem;
}

.select-gender__buttons {
  display: flex;
  gap: 1.5rem;
}
</style>
