<template>
  <main>
    <ProductsNavComp
      :navLevelsArray="[
        'Home',
        $route.params.sex === 'women' ? 'Women' : 'Men',
      ]"
    />

    <section class="hero">
      <div class="section__wrapper">
        <h1 class="h2-size uppercase">All {{ $route.params.sex }} shoes</h1>
      </div>
    </section>

    <section class="products">
      <div class="section__wrapper">
        <ProductsFiltersComp />

        <ProductsGalleryComp :shoes="shoes" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductsNavComp from "../components/ProductsNavComp.vue";
import ProductsFiltersComp from "@/components/ProductsFiltersComp.vue";
import ProductsGalleryComp from "@/components/ProductsGalleryComp.vue";

import { getProductsMale, getProductsFemale } from "@/services/products";

export default defineComponent({
  name: "MenShoesView",
  components: {
    ProductsNavComp,
    ProductsFiltersComp,
    ProductsGalleryComp,
  },

  data() {
    return {
      shoes: [],
    };
  },

  watch: {
    "$route.params.sex": function () {
      this.loadShoes();
    },
  },

  methods: {
    async loadShoes() {
      this.shoes = [];

      const res =
        this.$route.params.sex == "women"
          ? await getProductsFemale()
          : await getProductsMale();
      if (res == null) {
        this.shoes = [];
        return;
      }

      this.shoes = res.data.data;
    },
  },

  created() {
    this.loadShoes();
  },
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

/* PRODUCTS */
.products .section__wrapper {
  flex-direction: row;
  align-items: start;
  gap: 4rem;
}
</style>
