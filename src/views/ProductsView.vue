<template>
  <main>
    <ProductsNavComp
      :navLevelsArray="[
        { name: 'Home', path: '/' },
        {
          name: $route.name === 'productsWomen' ? 'Women' : 'Men',
          path: $route.path,
        },
      ]"
    />

    <section class="hero">
      <div class="section__wrapper">
        <h1 class="h2-size uppercase">
          All {{ $route.name === "productsMen" ? "men" : "women" }} shoes
        </h1>
      </div>
    </section>

    <section class="products">
      <div class="section__wrapper">
        <div class="products__filters">
          <h2 class="h3-size">FILTERS</h2>

          <ul class="filters__list" v-if="initialLoading === false">
            <li>
              <Dropdown2Comp header="CATEGORIES">
                <div class="dropdown__options-wrapper">
                  <div
                    class="dropdown__option-box"
                    v-for="(category, i) in categories"
                    :key="i"
                  >
                    <input
                      type="checkbox"
                      :name="'categories-' + category"
                      :id="'categories-' + category"
                      @change="categoryChange(category)"
                      :checked="selectedCategories.indexOf(category) !== -1"
                    />
                    <label :for="'categories-' + category">{{
                      category
                    }}</label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="BRAND">
                <div class="dropdown__options-wrapper">
                  <div
                    class="dropdown__option-box"
                    v-for="(brand, i) in brands"
                    :key="i"
                  >
                    <input
                      type="checkbox"
                      :name="'brand-' + brand"
                      :id="'brand-' + brand"
                      @change="brandChange(brand)"
                      :checked="selectedBrands.indexOf(brand) !== -1"
                    />
                    <label :for="'brand-' + brand">{{ brand }}</label>
                  </div>
                </div>
              </Dropdown2Comp>
            </li>
            <li>
              <Dropdown2Comp header="PRICE" parentheses="€">
                <div class="dropdown__options-wrapper">
                  <SliderDoubleComp :minValue="minPrice" :maxValue="maxPrice" />
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

        <ProductsGalleryComp :shoes="shoes" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductsNavComp from "@/components/ProductsNavComp.vue";
import ProductsGalleryComp from "@/components/ProductsGalleryComp.vue";
import Dropdown2Comp from "@/components/Dropdown2Comp.vue";
import SliderDoubleComp from "@/components/SliderDoubleComp.vue";

import { getProducts } from "@/services/products";
import store from "@/store";

export default defineComponent({
  name: "ProductsView",
  components: {
    ProductsNavComp,
    ProductsGalleryComp,
    Dropdown2Comp,
    SliderDoubleComp,
  },

  data() {
    return {
      shoes: [],

      categories: [],
      selectedCategories: [] as string[],

      brands: [],
      selectedBrands: [] as string[],

      minPrice: 0,
      maxPrice: 999,

      initialLoading: true,
    };
  },

  watch: {
    "$route.name": function () {
      this.initializeView();
    },
    "$route.query": function () {
      this.loadCategories();
      this.loadShoes();
    },
  },

  methods: {
    initializeView() {
      this.initialLoading = true;

      this.loadCategories();

      this.loadFilters();

      this.loadShoes();
    },

    loadCategories() {
      this.selectedCategories =
        this.$route.query.categories?.toString().split(",") || [];

      if (this.$route.name === "productsMen") {
        this.categories = store.getters.getMaleCategories;
      } else {
        this.categories = store.getters.getFemaleCategories;
      }
    },

    async loadFilters() {
      this.selectedBrands = [];

      let filters;

      if (this.$route.name === "productsMen") {
        if (store.getters.getMaleFilters == null) {
          await store.dispatch("fetchMaleFilters");
        }

        filters = store.getters.getMaleFilters;
      } else {
        if (store.getters.getFemaleFilters == null) {
          await store.dispatch("fetchFemaleFilters");
        }

        filters = store.getters.getFemaleFilters;
      }

      this.brands = filters.brands;
      this.minPrice = filters.minPrice;
      this.maxPrice = filters.maxPrice;

      console.log(filters);
    },

    async loadShoes() {
      this.shoes = [];

      const res =
        this.$route.name == "productsWomen"
          ? await getProducts(
              "female",
              this.selectedCategories,
              this.selectedBrands
            )
          : await getProducts(
              "male",
              this.selectedCategories,
              this.selectedBrands
            );
      if (res == null) {
        this.shoes = [];
        return;
      }

      this.shoes = res.data.data;

      this.initialLoading = false;
    },

    categoryChange(_category: string) {
      const index = this.selectedCategories.indexOf(_category);
      if (index !== -1) {
        // String exists, remove it
        this.selectedCategories.splice(index, 1);
      } else {
        // String doesn't exist, push it
        this.selectedCategories.push(_category);
      }

      // Check if selectedCategories is not empty
      if (this.selectedCategories.length > 0) {
        // If not empty, add or update the 'categories' query parameter
        this.$router.push({
          query: {
            ...this.$route.query,
            categories: this.selectedCategories.join(","),
          },
        });
      } else {
        // If empty, remove the 'categories' query parameter
        // const { categories, ...queryWithoutCategories } = this.$route.query;
        const queryWithoutCategories = Object.assign({}, this.$route.query);
        delete queryWithoutCategories.categories;

        this.$router.push({ query: queryWithoutCategories });
      }

      this.loadShoes();
    },

    brandChange(_brand: string) {
      const index = this.selectedBrands.indexOf(_brand);
      if (index !== -1) {
        // String exists, remove it
        this.selectedBrands.splice(index, 1);
      } else {
        // String doesn't exist, push it
        this.selectedBrands.push(_brand);
      }

      // Check if selectedCategories is not empty
      if (this.selectedBrands.length > 0) {
        // If not empty, add or update the 'categories' query parameter
        this.$router.push({
          query: {
            ...this.$route.query,
            brands: this.selectedBrands.join(","),
          },
        });
      } else {
        // If empty, remove the 'categories' query parameter
        // const { categories, ...queryWithoutCategories } = this.$route.query;
        const queryWithoutBrands = Object.assign({}, this.$route.query);
        delete queryWithoutBrands.brands;

        this.$router.push({ query: queryWithoutBrands });
      }

      this.loadShoes();
    },
  },

  created() {
    this.initializeView();
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

/* PRODUCTS */
.products .section__wrapper {
  flex-direction: row;
  align-items: start;
  gap: 4rem;
}

/* FILTERS */
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
</style>
