<template>
  <div class="shopping-cart">
    <div class="shopping-cart__wrapper">
      <ul>
        <li class="product" v-for="product in products" :key="product.id">
          <RouterLink :to="'/product/' + product.color_id">
            <img
              :src="'/products/' + product.color_id + '-1.jpg'"
              alt="Image of shoe"
            />
          </RouterLink>

          <div class="product__content">
            <h2>{{ product.name }}</h2>

            <p class="product__size">EU {{ product.size }}</p>
            <p class="product__id">Article nr: {{ product.id }}</p>

            <p v-if="product.discount > 0">
              <span class="ordinary-price">{{ product.price }}</span
              ><span class="discounted-price euro">{{
                (product.price - product.discount).toFixed(2)
              }}</span>
            </p>
            <p v-else class="euro">{{ product.price }}</p>

            <NumberInput1Comp
              class="quantity-input"
              :id="idPrefix + '-quantity-input-' + product.id"
              :horizontal="true"
              :minValue="1"
              :maxValue="Math.max(1, product.quantity_available)"
              :startValue="product.quantity"
              @valueChanged="quantityChanged($event, product.id)"
            ></NumberInput1Comp>

            <button
              class="btn--circle btn--icon btn--close"
              @click="removeProduct(product.id)"
            >
              <CrossIcon :size="'0.875rem'" />
            </button>
          </div>
        </li>
      </ul>

      <div class="shopping-cart__main">
        <p
          class="price-discount"
          v-if="
            products.reduce(
              (sum, product) => sum + product.quantity * product.discount,
              0
            ) > 0
          "
        >
          Total discount:
          <span class="euro">{{
            Math.round(
              products.reduce(
                (sum, product) => sum + product.quantity * product.discount,
                0
              ) * 100
            ) / 100
          }}</span>
        </p>

        <p class="price-total">
          Total:
          <span class="euro">
            {{
              Math.round(
                products.reduce(
                  (sum, product) =>
                    sum + product.quantity * (product.price - product.discount),
                  0
                ) * 100
              ) / 100
            }}</span
          >
        </p>

        <router-link
          v-if="haveGoToCartBtn"
          to="/shopping-cart"
          class="btn--primary uppercase"
          :class="{ disabled: products.length === 0 }"
        >
          {{ products.length === 0 ? "Cart is empty" : "Go to cart" }}
        </router-link>

        <button
          v-if="haveGoToCartBtn"
          class="btn--link"
          :disabled="products.length === 0"
          @click="clearCart"
        >
          Clear cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import NumberInput1Comp from "./NumberInput1Comp.vue";
import CrossIcon from "@/components/icons/CrossIcon.vue";

export default defineComponent({
  name: "ShoppingCartComp",
  components: {
    NumberInput1Comp,
    CrossIcon,
  },

  props: {
    idPrefix: {
      type: String,
      default: "1",
    },
    haveGoToCartBtn: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    products() {
      return store.state.cart.sort((a, b) => a.date_added - b.date_added);
    },
  },

  methods: {
    quantityChanged(_newValue: number, _id: number) {
      const product = this.products.find((item) => item.id === _id);
      if (product) {
        product.quantity = _newValue;
        store.dispatch("upsertProductCart", product);
      }
    },

    async removeProduct(_id: number) {
      await store.dispatch("removeProductCart", _id);
    },

    clearCart() {
      store.commit("CLEAR_CART");
    },
  },

  async created() {
    if (store.getters.getCart.length === 0) {
      await store.dispatch("fetchCart");
    }
  },
});
</script>

<style scoped>
.shopping-cart__wrapper {
  width: 22rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem 0 1rem;

  background-color: var(--color-background);
  border-radius: 4px;

  --color-text: var(--black);
  --color-background: var(--white);

  font-family: "Poppins", sans-serif;
}

.shopping-cart__wrapper ul {
  display: flex;
  flex-direction: column;

  padding: 0 1rem;
  max-height: 60svh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.product {
  border-bottom: 1px solid var(--color-text);
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 0.375rem 0;
}
.product img {
  height: 4rem;
  width: fit-content;
  border-radius: 3px;
}

.product__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto 1fr;
  align-items: center;
  gap: 0 0.25rem;
}

.product__content h2 {
  height: fit-content;
  grid-column: 1 / span 2;

  font-size: 0.75rem;
  font-weight: 500;
}
.product .product__size {
  grid-column: 3;

  font-size: 0.75rem;
}
.product .product__id {
  grid-column: 1 / span 3;

  font-size: 0.75rem;
  font-style: italic;
}
.product p {
  font-size: 0.875rem;
  height: fit-content;
}
.product p .ordinary-price {
  display: block;
  text-decoration: line-through;
  font-size: 0.6em;
  line-height: 1;
}
.product p .discounted-price {
  font-weight: 600;
  --color-text: var(--red--dark);
}

.quantity-input {
  --color-secondary: var(--color-text);
}
.btn--close {
  border: 1px solid var(--color-text);
  height: 1.5rem;
  width: 1.5rem;

  margin-left: 0.5em;

  pointer-events: all;
}

/* MAIN */
.shopping-cart__main {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.price-total {
  font-size: 1.5rem;
  font-weight: 700;
}
.price-discount {
  font-size: 1rem;
  font-weight: 600;
  --color-text: var(--red--dark);
}
.shopping-cart__main .btn--primary {
  width: 100%;
  justify-content: center;

  color: var(--black);

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.shopping-cart__main .btn--link {
  align-self: end;
  font-size: 0.75rem;
}
</style>
