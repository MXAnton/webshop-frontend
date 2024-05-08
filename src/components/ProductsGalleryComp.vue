<template>
  <div class="products__main-content">
    <div class="main-content__top" v-if="withSorting">
      <div class="products__sorting">
        <label for="sort-by">Sort by:</label>
        <div class="select-1">
          <select name="sort-by" id="sort-by">
            <option value="relevance">Relevance</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>

          <ExpandMoreIcon width="24" height="24" />
        </div>
      </div>

      <p class="products__amount">{{ shoes.length }} articles</p>
    </div>

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
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon.vue";

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
    ExpandMoreIcon,
  },

  props: {
    shoes: {
      type: Array as () => Shoe[],
      required: true,
    },
    withSorting: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
.products__main-content {
  flex: 1 1 0;
}

.main-content__top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4rem;
}

.products__sorting {
  display: flex;
  align-items: center;
}
.products__sorting label {
  font-weight: 300;
  font-size: 0.875rem;
  margin-right: 0.75rem;
}

.products__amount {
  font-weight: 200;
  font-size: 0.875rem;
}

.products__gallery ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  gap: 2rem 1rem;
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
