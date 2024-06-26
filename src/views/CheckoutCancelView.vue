<template>
  <main>
    <section class="section--hero">
      <div class="section__wrapper">
        <h1 class="uppercase">Payment was canceled</h1>
      </div>
    </section>

    <!-- <section class="section--shopping-cart">
      <div class="section__wrapper">
        <ShoppingCartComp
          :idPrefix="'shopping-cart-view'"
          :haveGoToCartBtn="false"
          :productsListHasScroll="false"
        />
      </div>
    </section> -->

    <section>
      <div class="section__wrapper">
        <router-link to="/shopping-cart" class="btn--primary uppercase"
          >Go to cart</router-link
        >
        <router-link to="/select-sex" class="btn--primary uppercase"
          >Browse more shoes</router-link
        >
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckoutCancelView",
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

.section__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
