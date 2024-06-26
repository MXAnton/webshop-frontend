<template>
  <ProductsNavComp
    v-if="product.product_id != null"
    :navLevelsArray="[
      { name: 'Home', path: '/' },
      {
        name: product.sex === 'female' ? 'Women' : 'Men',
        path: product.sex === 'female' ? '/products/women' : '/products/men',
      },
      {
        name: product.category,
        path:
          product.sex === 'female'
            ? '/products/women?categories=' + product.category
            : '/products/men?categories=' + product.category,
      },
      { name: product.name, path: $route.path },
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
      <button class="selected-image__wrapper" @click="zoomImage">
        <img
          :src="getImageUrl(images[selectedImage])"
          alt="Selected image of product"
        />

        <ZoomInIcon :size="'2rem'" class="zoom-icon" />
      </button>
      <nav>
        <ul>
          <li
            v-for="(image, i) in images"
            :key="i"
            :class="{ selected: image == images[selectedImage] }"
          >
            <button @click="selectedImage = i">
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
            :class="{ selected: color.id.toString() == $route.params.id }"
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
          :minValue="1"
          :maxValue="Math.max(1, product.sizes[selectedSizeIndex].quantity)"
          :startValue="quantity"
          @valueChanged="quantityChanged"
        ></NumberInput1Comp>

        <Select1Comp
          class="size-input"
          :id="'size-input'"
          :label="'Size'"
          :column="true"
          :fillHeight="true"
          @valueChanged="sizeChanged"
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

      <div class="info__row buy-cta">
        <button class="btn--secondary btn--square">
          <FavoriteIcon />
        </button>

        <button
          class="btn--primary uppercase"
          :disabled="product.sizes[selectedSizeIndex].quantity == 0"
          @click="addToCart"
        >
          Add to cart <span ref="addToCartIcon"><ShoppingBagIcon /></span>
        </button>
      </div>

      <div
        class="out-of-stock"
        v-if="product.sizes[selectedSizeIndex].quantity == 0"
      >
        <BlockIcon :color="'var(--yellow)'" :size="'1.25rem'" />
        <p>Out-of-stock</p>
      </div>

      <Dropdown2Comp class="mt-3" header="DETAILS">
        <ul class="details">
          <li>
            <h3>Name:</h3>
            <p>{{ product.name }}</p>
          </li>
          <li>
            <h3>Brand:</h3>
            <p>{{ product.brand }}</p>
          </li>
          <li>
            <h3>Sex:</h3>
            <p>{{ product.sex }}</p>
          </li>
          <li>
            <h3>Color:</h3>
            <p>{{ product.color }}</p>
          </li>
          <li>
            <h3>Material:</h3>
            <p>{{ product.material }}</p>
          </li>
        </ul>
      </Dropdown2Comp>

      <Dropdown2Comp class="mt-3" header="REVIEWS">
        <ul class="reviews">
          <li>
            <div>
              <h3>Best shoes I have tried!!!</h3>
              <ul>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
              </ul>
            </div>

            <p>
              I bought these shoes 4 months ago and it is the best shoes I have
              ever tried!! I will definitly buy them again when my current shoes
              break!
            </p>

            <p>// Robert Andersson</p>
          </li>

          <li>
            <div>
              <h3>Very good shoes!</h3>
              <ul>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--yellow-2)'" />
                </li>
                <li>
                  <StarIcon :size="'0.875rem'" :color="'var(--black)'" />
                </li>
              </ul>
            </div>

            <p>I like these shoes a lot! Big recommend!</p>

            <p>// Berit Lind</p>
          </li>
        </ul>
      </Dropdown2Comp>
    </section>
  </main>

  <dialog
    v-if="product.product_id != null"
    class="zoomed-image"
    ref="zoomedImage"
  >
    <button @click="prevImage" class="btn--primary btn--arrow">
      <ArrowIcon :flipX="true" />
    </button>
    <div class="zoomed-image__wrapper">
      <img
        :src="getImageUrl(images[selectedImage])"
        alt="Selected image of product"
      />
      <p>{{ selectedImage + 1 }} / {{ images.length }}</p>
    </div>
    <button
      @click="nextImage"
      class="btn--primary btn--arrow btn--arrow--right"
    >
      <ArrowIcon />
    </button>

    <button @click="unzoomImage" class="btn--primary btn--circle btn--close">
      <CrossIcon />
    </button>
  </dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductsNavComp from "../components/ProductsNavComp.vue";

import { getProductColor, getProductColors } from "@/services/products";

import { capitalizeFirstLetter } from "@/helpers/index";
import Select1Comp from "@/components/Select1Comp.vue";
import NumberInput1Comp from "@/components/NumberInput1Comp.vue";
import FavoriteIcon from "@/components/icons/FavoriteIcon.vue";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import BlockIcon from "@/components/icons/BlockIcon.vue";
import Dropdown2Comp from "@/components/Dropdown2Comp.vue";
import ZoomInIcon from "@/components/icons/ZoomInIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import CrossIcon from "@/components/icons/CrossIcon.vue";
import store from "@/store";

interface Product {
  product_id: number;
  name: string;
  brand: string;
  category: string;
  sex: string;
  price: number;
  discount: number;
  color: string;
  colors: Color[];
  sizes: Size[];
  images: string;
  material: string;
}
interface Color {
  id: number;
  color: string;
}
interface Size {
  id: number;
  size: string;
  quantity: number;
}

// Extend the HTMLDialogElement interface to include showModal and close methods
interface HTMLDialogElement extends HTMLElement {
  showModal: () => void;
  close: () => void;
}

export default defineComponent({
  name: "MenShoesView",
  components: {
    ProductsNavComp,
    Select1Comp,
    NumberInput1Comp,
    FavoriteIcon,
    ShoppingBagIcon,
    BlockIcon,
    Dropdown2Comp,
    StarIcon,
    ZoomInIcon,
    ArrowIcon,
    CrossIcon,
  },

  data() {
    return {
      product: {} as Product,
      productNotFound: false,
      selectedImage: 0,
      images: [] as string[],

      selectedSizeIndex: 0,
      quantity: 1,
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
      this.selectedImage = 0;
      this.quantity = 1;
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

      this.images = this.product.images.split(",");
    },

    getImageUrl(_image: string) {
      return "/products/" + this.$route.params.id + "-" + _image + ".jpg";
    },

    sizeChanged(_newValue: string) {
      this.selectedSizeIndex = this.product.sizes.findIndex(
        (size) => size.size == _newValue
      );
    },
    quantityChanged(_newValue: number) {
      this.quantity = _newValue;
    },

    zoomImage() {
      const zoomedImage = this.$refs.zoomedImage as HTMLDialogElement;
      zoomedImage?.showModal();
    },
    unzoomImage() {
      const zoomedImage = this.$refs.zoomedImage as HTMLDialogElement;
      zoomedImage?.close();
    },

    prevImage() {
      const newSelectedImage = this.selectedImage - 1;

      if (newSelectedImage < 0) {
        this.selectedImage = this.images.length - 1;
        return;
      }

      this.selectedImage = newSelectedImage;
    },
    nextImage() {
      const newSelectedImage = this.selectedImage + 1;

      if (newSelectedImage > this.images.length - 1) {
        this.selectedImage = 0;
        return;
      }

      this.selectedImage = newSelectedImage;
    },

    addToCart() {
      const size = this.product.sizes[this.selectedSizeIndex];
      if (size == null) {
        return;
      }
      store.dispatch("addProductCart", {
        id: size.id,
        quantity: this.quantity,
        quantity_available: size.quantity,
      });

      this.shootProductToCart();
    },

    shootProductToCart() {
      // Create a new div element
      let shoppingCartFlying = document.createElement("div");
      // Add the class 'shopping-cart-flying' to the new div
      shoppingCartFlying.classList.add("shopping-cart-flying");
      // Set text to added quantity
      shoppingCartFlying.innerText = this.quantity.toString();
      // Append the new div to the app (grand parent) element
      const appElement = document.getElementById("app") as HTMLElement;
      appElement.appendChild(shoppingCartFlying);

      // Set initial position of the moving element
      const fromElement = this.$refs.addToCartIcon as HTMLElement;
      const fromRect = fromElement.getBoundingClientRect();
      shoppingCartFlying.style.transform = `translate(${fromRect.left}px, ${fromRect.top}px)`;

      // Trigger the move
      requestAnimationFrame(() => {
        // Set transition duration
        shoppingCartFlying.style.transition = "0.5s transform ease-out";

        // Get and set target position
        const targetElement = document.getElementById(
          "shopping-cart-amount"
        ) as HTMLElement;
        const targetRect = targetElement.getBoundingClientRect();
        shoppingCartFlying.style.transform = `translate(${targetRect.left}px, ${targetRect.top}px)`;
      });

      // Remove after 500ms
      setTimeout(() => {
        shoppingCartFlying.remove();
      }, 500);
    },
  },

  created() {
    this.loadProduct();
  },
});
</script>

<style scoped>
.images .selected-image__wrapper {
  display: block;
  margin-bottom: 1rem;
  width: 100%;

  position: relative;
}
.images .selected-image__wrapper .zoom-icon {
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  fill: #13151597;

  transform: scale(1);
  transition: 0.2s ease-in-out transform;
}
.images .selected-image__wrapper:hover .zoom-icon {
  transform: scale(1.2);
}
.selected-image__wrapper img {
  width: 100%;
  min-height: 15rem;
  border-radius: 4px;
  background-color: var(--blue);
}

.zoomed-image {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  padding: 1rem;
  border: none;
  background-color: rgba(0, 0, 0, 0.274);
}
.zoomed-image > .btn--arrow {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  z-index: 2;
}
.zoomed-image > .btn--arrow--right {
  right: 1rem;
  left: unset;
}
.zoomed-image .btn--close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}
.zoomed-image__wrapper {
  position: relative;
}
.zoomed-image__wrapper img {
  object-fit: contain;
  width: 100%;
  max-height: calc(100svh - 2rem);
}
.zoomed-image__wrapper p {
  font-size: 1rem;
  background-color: var(--white);
  color: var(--black);
  padding: 0.5em 1em;
  border-radius: 4px;
  text-align: center;

  position: absolute;
  bottom: 0.5em;
  left: 50%;
  transform: translateX(-50%);
}

.images ul {
  display: flex;
  flex-wrap: wrap;
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
  padding: 1rem var(--padding-horizontal);
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

.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  max-width: 50ch;
}

.info__row,
.buy-cta {
  margin-top: 1rem;

  display: flex;
  gap: 1rem;
}

.buy-cta {
  --color-text: var(--color-primary);
  --color-border: var(--color-primary);
}
.buy-cta svg {
  font-size: 1.5em;
}
.buy-cta button {
  position: relative;
  transition: 0.1s ease-in-out transform;
}
.buy-cta button:active {
  transform: scale(0.95);
}
.buy-cta button:active svg {
  animation: shake 0.2s infinite;
}

.out-of-stock {
  margin-top: 0.4em;

  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 0.3em;
}
.out-of-stock p {
  font-size: 1em;
  --color-text: var(--white-2);
}

.details {
  display: grid;
  gap: 0.5rem;
}
.details li {
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 0.3em;
}
.details h3 {
  font-size: 1em;
  font-weight: 700;
}
.details p {
  font-size: 1em;
  text-transform: capitalize;
}

.reviews {
  display: grid;
  gap: 0.4rem;
}
.reviews > li {
  display: grid;
  gap: 0.625rem;
  padding: 0.75rem 1rem 1.25rem;
  border-radius: 2px;

  --color-text: var(--black);
  --color-background: var(--white);
  background-color: var(--color-background);
}
.reviews > li > div {
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
}
.reviews > li h3 {
  font-size: 0.875rem;
  font-weight: 700;
}
.reviews > li > div ul {
  display: flex;
  gap: 0.2rem;
}
.reviews > li p {
  font-size: 0.75rem;
}
.reviews > li p:last-child {
  font-weight: 300;
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

@media only screen and (max-width: 57rem) {
  .product {
    grid-template-columns: 1fr;
  }
}
</style>
