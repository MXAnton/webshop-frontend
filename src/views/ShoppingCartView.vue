<template>
  <main>
    <section class="section--hero">
      <div class="section__wrapper">
        <h1 class="uppercase">Shopping cart</h1>
      </div>
    </section>

    <section class="section--shopping-cart">
      <div class="section__wrapper">
        <ShoppingCartComp
          :idPrefix="'shopping-cart-view'"
          :haveGoToCartBtn="false"
          :productsListHasScroll="false"
        />
      </div>
    </section>

    <section>
      <div class="section__wrapper">
        <form @submit.prevent="checkout">
          <button class="btn--primary" type="submit" id="checkout-button">
            Checkout
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import ShoppingCartComp from "@/components/ShoppingCartComp.vue";
import { createCheckoutSession } from "@/services/products";
import store from "@/store";
import { defineComponent } from "vue";

interface Product {
  id: number;
  quantity: number;
  color_id: number;
}

export default defineComponent({
  name: "ShoppingCartView",
  components: {
    ShoppingCartComp,
  },

  data() {
    return {};
  },

  methods: {
    async checkout() {
      const productsEssentials = store.getters.getCart.map(
        (product: Product) => ({
          id: product.id,
          quantity: product.quantity,
          image: `${window.location.origin}/products/${product.color_id}-1.jpg`,
        })
      );

      const res = await createCheckoutSession(productsEssentials);
      if (res === null) {
        return;
      }
      window.location.href = res?.data.data;
    },
  },
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

@media only screen and (max-width: 25rem) {
  .section--shopping-cart {
    --padding-horizontal: 0;
  }
}
</style>
<style>
.section--shopping-cart .shopping-cart__wrapper {
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
}
</style>
