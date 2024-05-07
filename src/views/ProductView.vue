<template>
  <ProductsNavComp
    v-if="product.product_id != null"
    :navLevelsArray="[
      'Home',
      product.sex === 'female' ? 'Women' : 'Men',
      product.name,
    ]"
  />

  <main v-if="productNotFound" class="not-found">
    <section>
      <div class="section__wrapper">
        <h1>404</h1>

        <p>Product not found :(</p>

        <router-link class="btn--secondary" to="/">Home of page</router-link>
      </div>
    </section>
  </main>
  <main v-else-if="product != null" class="product">
    <section class="images">
      <div class="selected-image__wrapper">
        <img src="" alt="Selected image of product" />
      </div>
      <nav>
        <ul>
          <li v-for="(image, i) in product.images" :key="i">
            <img src="" alt="Image of product" />
          </li>
        </ul>
      </nav>
    </section>

    <section class="info">
      <h1 class="h2-size">{{ product.name }}</h1>
      <p class="brand">
        Brand: <strong>{{ product.brand }}</strong>
      </p>
      <p class="sex">
        Sex: <strong>{{ product.sex }}</strong>
      </p>
      <p class="price">
        <strong>{{ product.price }}</strong>
      </p>
      <div class="colors">
        <p>Colors:</p>
        <ul>
          <li
            v-for="(color, i) in product.colors"
            :key="i"
            :class="{ selected: color.id == $route.params.id }"
          >
            <RouterLink
              :to="'/product/' + color.id"
              :style="{ 'background-color': color.color }"
            ></RouterLink>
          </li>
        </ul>
      </div>

      <div class="info__row">
        <div class="quantity-input">
          <label for="quantity-input">Quantity:</label>
          <input
            type="number"
            name="quantity-input"
            id="quantity-input"
            min="0"
          />
        </div>

        <div class="size-input">
          <label for="size-input">Size:</label>
          <select name="size-input" id="size-input">
            <option
              v-for="size in product.sizes"
              :key="size.size"
              :value="size.size"
            >
              {{ size.size }}
            </option>
          </select>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductsNavComp from "../components/ProductsNavComp.vue";

import { getProductColor, getProductColors } from "@/services/products";

interface Product {
  product_id: number;
  name: string;
  brand: string;
  category: string;
  sex: string;
  price: number;
  discount: number;
  color: string;
  colors: [];
  sizes: [];
}

export default defineComponent({
  name: "MenShoesView",
  components: {
    ProductsNavComp,
  },

  data() {
    return {
      product: {} as Product,
      productNotFound: false,
    };
  },

  watch: {
    "$route.params.id"() {
      this.loadProduct();
    },
  },

  methods: {
    async loadProduct() {
      this.productNotFound = false;
      const prevProductId = this.product.product_id;
      const prevColors = this.product.colors;
      this.product = {} as Product;

      const res = await getProductColor(this.$route.params.id);
      if (res == null || res.data.length === 0) {
        this.productNotFound = true;
        return;
      }

      if (prevProductId != res.data.data.product_id) {
        const colorsRes = await getProductColors(res.data.data.product_id);
        if (colorsRes == null || colorsRes.data.length === 0) {
          this.productNotFound = true;
          return;
        }

        this.product = { ...res.data.data, colors: colorsRes.data.data };
      } else {
        this.product = { ...res.data.data, colors: prevColors };
      }
    },
  },

  created() {
    this.loadProduct();
  },
});
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5rem;

  max-width: 80rem;
  width: 100%;
  padding: 1rem 4rem;
  margin: 0 auto;
}

.colors {
  display: flex;
  gap: 0.4rem;
}
.colors ul {
  display: flex;
  gap: 0.3rem;
}

.colors a {
  font-size: 1.5rem;

  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  background-color: black;
  border: 1px solid var(--white-2);

  position: relative;
}
.colors .selected a::after {
  content: "";

  position: absolute;
  bottom: -0.25em;

  width: 100%;
  height: 2px;
  border-radius: 2px;

  background-color: var(--white-2);
}

.selected-image__wrapper img {
  width: 100%;
  min-height: 15rem;
  border-radius: 4px;
  background-color: var(--blue);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info__row {
  display: flex;
  gap: 1rem;
}

.not-found .section__wrapper > * {
  max-width: 65ch;
}
.not-found h1 {
  font-size: 8rem;
}
.not-found p {
  font-size: 1.45rem;
  margin-bottom: 2em;
}
</style>
