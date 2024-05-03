<template>
  <ProductsNavComp
    :navLevelsArray="[
      'Home',
      'Men',
      product.sex != null ? product.name : 'Not found',
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
            :class="{ selected: color.id === $route.params.id }"
          >
            <RouterLink
              :to="'/product/' + color.id"
              :style="{ 'background-color': color.color }"
            ></RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductsNavComp from "../components/ProductsNavComp.vue";

import { getProduct } from "@/services/products";

interface Product {
  id: number;
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
      product: Object as () => Product,
      productNotFound: false,
    };
  },

  methods: {
    async loadProduct() {
      const res = await getProduct(this.$route.params.id);
      if (res == null || res.data.length === 0) {
        this.productNotFound = true;
        return;
      }

      this.product = res.data.data;
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
