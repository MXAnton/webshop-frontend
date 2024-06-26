<template>
  <main>
    <section class="section--hero">
      <div class="section__wrapper">
        <h1>Shopping cart</h1>
      </div>
    </section>

    <section class="section--shopping-cart">
      <div class="section__wrapper">
        <ShoppingCartComp
          :idPrefix="'shopping-cart-view'"
          :haveGoToCartBtn="false"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import ShoppingCartComp from "@/components/ShoppingCartComp.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingCartView",
  components: {
    ShoppingCartComp,
  },

  data() {
    return {};
  },

  methods: {},
});
</script>

<style scoped>
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.section--hero {
  padding-bottom: 0;
}
h1 {
  margin-bottom: 0.2em;
  text-align: center;
}

.section--shopping-cart {
  padding-top: 0;
}
</style>
<style>
.section--shopping-cart .shopping-cart__wrapper {
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
}
</style>
