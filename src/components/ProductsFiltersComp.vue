<template>
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
              <input type="checkbox" name="brand-lejon" id="brand-lejon" />
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
              <label for="color-red" style="background-color: red"></label>
            </div>
            <div class="dropdown__option-color">
              <input type="checkbox" name="color-yellow" id="color-yellow" />
              <label
                for="color-yellow"
                style="background-color: yellow"
              ></label>
            </div>
            <div class="dropdown__option-color">
              <input type="checkbox" name="color-black" id="color-black" />
              <label for="color-black" style="background-color: black"></label>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Dropdown2Comp from "../components/Dropdown2Comp.vue";
import SliderDoubleComp from "@/components/SliderDoubleComp.vue";

export default defineComponent({
  name: "ProductsFiltersComp",
  components: {
    Dropdown2Comp,
    SliderDoubleComp,
  },
});
</script>

<style scoped>
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
