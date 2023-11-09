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
  gap: 5rem;

  padding-top: 4rem;
  padding-bottom: 4rem;
}

.select-gender__buttons {
  width: 100%;

  display: flex;
  gap: 3rem;
}

.select-gender__buttons .btn--primary {
  flex: 1 1 0;
  min-height: 30vh;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;

  border-bottom: 0 solid black;

  transition: transform 0.2s ease-in-out, border 0.2s ease-in-out;
}
.select-gender__buttons .btn--primary:hover {
  transform: translateY(-3%);
  border-bottom: 3px solid var(--color-text);
}
</style>
