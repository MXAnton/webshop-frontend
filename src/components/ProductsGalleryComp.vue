<template>
  <div class="products__main-content">
    <!-- <div class="main-content__top" v-if="withSorting">
      <Select1Comp :id="'sort-by'" :label="'Sort by'">
        <option value="relevance">Relevance</option>
        <option value="lowest-price">Lowest Price</option>
        <option value="highest-price">Highest Price</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option></Select1Comp
      >

      <p class="products__amount">{{ shoes.length }} articles</p>
    </div> -->

    <div class="products__gallery">
      <ul>
        <li class="product" v-for="shoe in shoes" :key="shoe.id">
          <RouterLink :to="'/product/' + shoe.id">
            <div class="product__image-wrapper">
              <img
                :src="'/products/' + shoe.id + '-1.jpg'"
                alt="Image of shoe"
              />
              <button>
                <FavoriteIcon width="32" height="32" />
              </button>
            </div>

            <h3>{{ shoe.name }}</h3>
            <p v-if="shoe.discount > 0">
              <span class="ordinary-price">{{ shoe.price }}</span
              ><span class="discounted-price euro">{{
                (shoe.price - shoe.discount).toFixed(2)
              }}</span>
            </p>
            <p v-else class="euro">{{ shoe.price }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FavoriteIcon from "@/components/icons/FavoriteIcon.vue";

interface Shoe {
  id: number;
  name: string;
  price: number;
  discount: number;
}

export default defineComponent({
  name: "ProductsGalleryComp",
  components: {
    FavoriteIcon,
  },

  props: {
    shoes: {
      type: Array as () => Shoe[],
      required: true,
    },
  },
});
</script>

<style scoped>
.products__main-content {
  flex: 1 1 0;
}

.products__gallery ul {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr)); */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;
}
@media only screen and (max-width: 70rem) {
  .products__gallery ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 50rem) {
  .products__gallery ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product > a {
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.product__image-wrapper {
  position: relative;

  width: 100%;

  border-radius: 4px;
  overflow: hidden;

  --color-text: var(--color-background);
}
.product__image-wrapper img {
  height: 100%;
  width: 100%;
}
.product__image-wrapper button {
  position: absolute;
  top: 3%;
  right: 3%;
}

.product h3 {
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  line-height: 0.9;

  margin-top: 0.4em;
  margin-bottom: 0em;
}
.product p {
  font-size: 1em;
}
.product p:has(.discounted-price) {
  display: flex;
  align-items: center;
  gap: 0.3em;
}
.product p .ordinary-price {
  text-decoration: line-through;
  font-size: 0.6em;
  line-height: 1;
}
.product p .discounted-price {
  font-weight: 600;
  --color-text: var(--red);
}
</style>
