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
  <main v-else-if="product.product_id != null" class="product">
    <section class="images">
      <div class="selected-image__wrapper">
        <img
          :src="getImageUrl(selectedImage)"
          alt="Selected image of product"
        />
      </div>
      <nav>
        <ul>
          <li
            v-for="(image, i) in product.images.split(',')"
            :key="i"
            :class="{ selected: image == selectedImage }"
          >
            <button @click="selectedImage = image">
              <img :src="getImageUrl(image)" alt="Image of product" />
            </button>
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
        Sex: <strong>{{ capitalizeFirstLetter(product.sex) }}</strong>
      </p>

      <p v-if="product.discount > 0" class="price">
        <span class="discounted-price euro">{{
          (product.price - product.discount).toFixed(2)
        }}</span>
        <span class="ordinary-price">{{ product.price }}</span>
      </p>
      <p v-else class="price euro">{{ product.price }}</p>

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
        <NumberInput1Comp
          :id="'quantity-input'"
          :label="'Quantity'"
          :maxValue="product.sizes[0].quantity"
        ></NumberInput1Comp>

        <Select1Comp
          class="size-input"
          :id="'size-input'"
          :label="'Size'"
          :column="true"
          :fillHeight="true"
        >
          <option
            v-for="size in product.sizes"
            :key="size.size"
            :value="size.size"
          >
            EU {{ size.size }}
          </option></Select1Comp
        >
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductsNavComp from "../components/ProductsNavComp.vue";

import { getProductColor, getProductColors } from "@/services/products";

import { capitalizeFirstLetter } from "@/helpers/index";
import Select1Comp from "@/components/Select1Comp.vue";
import NumberInput1Comp from "@/components/NumberInput1Comp.vue";

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
    Select1Comp,
    NumberInput1Comp,
  },

  data() {
    return {
      product: {} as Product,
      productNotFound: false,
      selectedImage: "1",
    };
  },

  watch: {
    "$route.params.id"() {
      this.loadProduct();
    },
  },

  methods: {
    capitalizeFirstLetter,

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

    getImageUrl(_image: string) {
      return "/products/" + this.$route.params.id + "-" + _image + ".jpg";
    },
  },

  created() {
    this.loadProduct();
  },
});
</script>

<style scoped>
.images .selected-image__wrapper {
  margin-bottom: 1rem;
}
.images ul {
  display: flex;
  gap: 0.75rem;
}
.images li button {
  height: 5.875rem;
  border-radius: 3px;
  border: 3px solid transparent;
}
.images li img {
  height: 100%;
  border-radius: 2px;
}
.images li.selected button {
  border-color: var(--white-2);
  background-color: var(--white-2);
  transition: all 0.3s ease-in-out;
}
.images li.selected img {
  filter: brightness(0.6);
}

.product {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5rem;

  max-width: 80rem;
  width: 100%;
  padding: 1rem 4rem;
  margin: 0 auto;
}

.product .price {
  font-size: 1.5rem;
  font-weight: 700;
}
.product .price,
.product .price * {
  letter-spacing: 0.03em;
}
.product p:has(.discounted-price) {
  display: flex;
  align-items: center;
  gap: 0.3em;
}
.product p .ordinary-price {
  text-decoration: line-through;
  font-size: 0.6em;
  font-weight: 400;
}
.product p .discounted-price {
  --color-text: var(--red);
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
  margin-top: 1rem;

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
