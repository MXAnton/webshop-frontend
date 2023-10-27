<template>
  <div class="products__main-content">
    <div class="main-content__top">
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

      <p class="products__amount">8 articles</p>
    </div>

    <div class="products__gallery">
      <ul>
        <li class="product">
          <div class="product__image-wrapper">
            <img src="/products/balboa-black-1.jpg" alt="Shoes" />
            <button>
              <FavoriteIcon width="32" height="32" />
            </button>
          </div>

          <h3>Balboa</h3>
          <p>€ 58</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FavoriteIcon from "@/components/icons/FavoriteIcon.vue";
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon.vue";

export default defineComponent({
  name: "ProductsGalleryComp",
  components: {
    FavoriteIcon,
    ExpandMoreIcon,
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
  display: flex;
  gap: 1rem;
}

.product {
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.product__image-wrapper {
  position: relative;

  height: 10.75em;

  border-radius: 4px;
  overflow: hidden;

  color: var(--color-background);
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

  margin-top: 0.4em;
  margin-bottom: 0em;
}
.product p {
  font-size: 1em;
}
</style>
