<template>
  <main :class="{ disabled: checkingOut }">
    <section class="section--shopping-cart">
      <div class="section__wrapper">
        <h1 class="uppercase">Shopping cart</h1>

        <ShoppingCartComp
          :idPrefix="'shopping-cart-view'"
          :haveGoToCartBtn="false"
          :productsListHasScroll="false"
        />

        <form @submit.prevent="checkout">
          <button
            class="btn--primary uppercase"
            type="submit"
            id="checkout-button"
            :disabled="checkingOut === true"
          >
            {{ checkingOut ? "Loading..." : "Checkout" }}
          </button>
        </form>
      </div>
    </section>

    <section class="best-sellers">
      <div class="section__wrapper">
        <h2 class="uppercase">Customers also liked these</h2>

        <ProductsGalleryComp :shoes="bestSellingShoes" />
      </div>
    </section>
  </main>

  <div v-if="checkingOut" class="loading-overlay">
    <div class="loader"></div>
  </div>
</template>

<script lang="ts">
import ProductsGalleryComp from "@/components/ProductsGalleryComp.vue";
import ShoppingCartComp from "@/components/ShoppingCartComp.vue";
import { createCheckoutSession, getBestSellers } from "@/services/products";
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
    ProductsGalleryComp,
  },

  data() {
    return {
      bestSellingShoes: [],

      checkingOut: false,
    };
  },

  methods: {
    async loadBestSellingShoes() {
      const res = await getBestSellers(3);
      if (res == null) {
        this.bestSellingShoes = [];
        return;
      }

      this.bestSellingShoes = res.data.data;
    },

    async checkout() {
      this.checkingOut = true;

      const productsEssentials = store.getters.getCart.map(
        (product: Product) => ({
          id: product.id,
          quantity: product.quantity,
          image: `${window.location.origin}/products/${product.color_id}-1.jpg`,
        })
      );

      const res = await createCheckoutSession(productsEssentials);
      if (res === null) {
        this.checkingOut = false;
        return;
      }
      window.location.href = res?.data.data;
    },
  },

  created() {
    this.loadBestSellingShoes();
  },
});
</script>

<style scoped>
main.disabled {
  pointer-events: none;
}

.loading-overlay {
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 5;
}
.loading-overlay .loader {
  position: absolute;
  top: calc(50% - 5rem);
  left: calc(50% - 5rem);

  border: 1rem solid var(--white);
  border-top: 1rem solid var(--black);
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  animation: spin 2s ease-in-out infinite;

  opacity: 0.8;
}
@keyframes spin {
  0% {
    transform: rotate(40deg);
  }
  100% {
    transform: rotate(400deg);
  }
}

section {
  padding-top: 5rem;
}
.section__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

h1 {
  margin-bottom: 0.2em;
  text-align: center;
}
h2 {
  text-align: center;
}

@media only screen and (max-width: 25rem) {
  .section--shopping-cart {
    --padding-horizontal: 0;
  }
}
</style>
<style>
.section--shopping-cart .shopping-cart {
  width: 100%;
}
.section--shopping-cart .shopping-cart__wrapper {
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
}
</style>
