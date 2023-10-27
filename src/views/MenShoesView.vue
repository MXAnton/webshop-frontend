<template>
  <main>
    <ProductsNavComp :navLevelsArray="['Home', 'Men']" />

    <section class="hero">
      <div class="section__wrapper">
        <h1 class="h2-size">ALL MEN SHOES</h1>
      </div>
    </section>

    <section class="products">
      <div class="section__wrapper">
        <div class="products__filters">
          <h2 class="h3-size">FILTERS</h2>

          <ul class="filters__list">
            <li>
              <Dropdown2Comp header="CATEGORIES">
                <div class="dropdown__options-wrapper">
                  <div class="dropdown__option-box">
                    <input
                      type="checkbox"
                      name="categories-slippers"
                      id="categories-slippers"
                    />
                    <label for="categories-slippers">Slippers</label>
                  </div>
                  <div class="dropdown__option-box">
                    <input
                      type="checkbox"
                      name="categories-dress-shoes"
                      id="categories-dress-shoes"
                    />
                    <label for="categories-dress-shoes">Dress shoes</label>
                  </div>
                  <div class="dropdown__option-box">
                    <input
                      type="checkbox"
                      name="categories-sneakers"
                      id="categories-sneakers"
                    />
                    <label for="categories-sneakers">Sneakers</label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="BRAND">
                <div class="dropdown__options-wrapper">
                  <div class="dropdown__option-box">
                    <input
                      type="checkbox"
                      name="brand-sneakers"
                      id="brand-sneakers"
                    />
                    <label for="brand-sneakers">Sneakers</label>
                  </div>
                  <div class="dropdown__option-box">
                    <input
                      type="checkbox"
                      name="brand-stepside"
                      id="brand-stepside"
                    />
                    <label for="brand-stepside">Stepside</label>
                  </div>
                  <div class="dropdown__option-box">
                    <input
                      type="checkbox"
                      name="brand-lejon"
                      id="brand-lejon"
                    />
                    <label for="brand-lejon">Lejon</label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="PRICE" parentheses="€">
                <div class="dropdown__options-wrapper">
                  <SliderDoubleComp :minValue="50" :maxValue="345" />
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="COLOR">
                <div class="dropdown__options-wrapper">
                  <div class="dropdown__option-color">
                    <input type="checkbox" name="color-red" id="color-red" />
                    <label
                      for="color-red"
                      style="background-color: red"
                    ></label>
                  </div>
                  <div class="dropdown__option-color">
                    <input
                      type="checkbox"
                      name="color-yellow"
                      id="color-yellow"
                    />
                    <label
                      for="color-yellow"
                      style="background-color: yellow"
                    ></label>
                  </div>
                  <div class="dropdown__option-color">
                    <input
                      type="checkbox"
                      name="color-black"
                      id="color-black"
                    />
                    <label
                      for="color-black"
                      style="background-color: black"
                    ></label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="SIZE" parentheses="EU">
                <div class="dropdown__options-wrapper">
                  <div class="dropdown__option-box">
                    <input type="checkbox" name="size-42" id="size-42" />
                    <label for="size-42">42</label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="MATERIAL">
                <div class="dropdown__options-wrapper">
                  <div class="dropdown__option-box">
                    <input
                      type="checkbox"
                      name="material-syntet"
                      id="material-syntet"
                    />
                    <label for="material-syntet">Syntet</label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="ON SALE">
                <div class="dropdown__options-wrapper">
                  <div class="dropdown__option-radio-1__wrapper">
                    <label class="dropdown__option-radio-1">
                      Show all
                      <input type="radio" name="on-sale" checked />
                    </label>
                    <label class="dropdown__option-radio-1">
                      No sale
                      <input type="radio" name="on-sale" />
                    </label>
                    <label class="dropdown__option-radio-1">
                      On sale
                      <input type="radio" name="on-sale" />
                    </label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
          </ul>
        </div>

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
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductsNavComp from "../components/ProductsNavComp.vue";
import Dropdown2Comp from "../components/Dropdown2Comp.vue";
import FavoriteIcon from "@/components/icons/FavoriteIcon.vue";
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon.vue";
import SliderDoubleComp from "@/components/SliderDoubleComp.vue";

export default defineComponent({
  name: "MenShoesView",
  components: {
    ProductsNavComp,
    Dropdown2Comp,
    FavoriteIcon,
    ExpandMoreIcon,
    SliderDoubleComp,
  },
});
</script>

<style scoped>
.section__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding-top: 4rem;
  padding-bottom: 4rem;
}

.products__filters {
  width: 15rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.filters__list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* PRODUCTS */
.products .section__wrapper {
  flex-direction: row;
  align-items: start;
  gap: 4rem;
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
.product__image-wrapper svg {
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
