<template>
  <main class="home">
    <section class="hero">
      <div class="section__wrapper">
        <div class="hero__content">
          <h1 class="logo-font">YOUR SHOES</h1>
          <p>Find your next shoes,<br />or add on to your collection</p>

          <router-link to="/select-sex" class="btn--primary mt-2"
            >Browse now</router-link
          >
        </div>

        <div class="hero__img-wrapper">
          <img
            alt="Your Shoes logo with text YOUR and below is an image of a shoe"
            src="../assets/logos/logo-shoe.png"
          />
        </div>
      </div>
    </section>

    <section class="purshase-info">
      <div class="section__wrapper">
        <SlideshowInfiniteComp>
          <li>
            <div>
              <LocalShippingIcon width="64" height="64" />
            </div>
            <div class="purshase-info__content">
              <h2 class="h4-size">FREE SHIPPING</h2>
              <p>Free shipping on all Europe orders above 200 EUR</p>
            </div>
          </li>
          <li>
            <div>
              <UndoIcon width="64" height="64" />
            </div>
            <div class="purshase-info__content">
              <h2 class="h4-size">30 DAYS RETURN</h2>
              <p>Simply return it within 30 days for an exchange</p>
            </div>
          </li>
          <li>
            <div>
              <PaymentsIcon width="64" height="64" />
            </div>
            <div class="purshase-info__content">
              <h2 class="h4-size">100% PAYMENT SECURE</h2>
              <p>Simply return it within 30 days for an exchange</p>
            </div>
          </li></SlideshowInfiniteComp
        >
      </div>
    </section>

    <section class="best-sellers" id="best-sellers">
      <div class="section__wrapper">
        <h2>BEST SELLERS</h2>

        <ProductsGalleryComp :shoes="bestSellingShoes" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LocalShippingIcon from "@/components/icons/LocalShippingIcon.vue";
import UndoIcon from "@/components/icons/UndoIcon.vue";
import PaymentsIcon from "@/components/icons/PaymentsIcon.vue";
import ProductsGalleryComp from "@/components/ProductsGalleryComp.vue";
import { getBestSellers } from "@/services/products";
import SlideshowInfiniteComp from "@/components/SlideshowInfiniteComp.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    LocalShippingIcon,
    UndoIcon,
    PaymentsIcon,
    ProductsGalleryComp,
    SlideshowInfiniteComp,
  },

  data() {
    return {
      bestSellingShoes: [],
    };
  },

  methods: {
    async loadBestSellingShoes() {
      const res = await getBestSellers(3);
      if (res == null) {
        this.bestSellingShoes = [];
        return;
      }

      this.bestSellingShoes = res.data.data;
    },
  },

  created() {
    this.loadBestSellingShoes();
  },
});
</script>

<style scoped>
/* HERO */
.hero {
  width: 100%;
}

.hero .section__wrapper {
  min-height: 36rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin-top: 0.3em;
}

.hero__img-wrapper {
  max-width: 35rem;
}
.hero__img-wrapper img {
  width: 100%;
}

/* PURSHASE INFO */
.purshase-info {
  --color-background: var(--color-secondary);
  background-color: var(--color-background);
  --color-text: var(--black);
}

.purshase-info li {
  max-width: 20rem;
  min-width: 18rem;
  display: flex;
  gap: 1.125rem;
  margin-left: 2rem;
}

.purshase-info__content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.purshase-info__content p {
  font-size: 0.875rem;
}

/* BEST SELLERS */
.best-sellers .section__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media only screen and (max-width: 71rem) {
  .hero__img-wrapper {
    display: none;
  }
  .purshase-info .section__wrapper {
    --padding-horizontal: 0;
  }
  .purshase-info .slideshow::before,
  .purshase-info .slideshow::after {
    content: none;
  }
}
</style>

<style>
.best-sellers .products__gallery ul {
  grid-template-columns: repeat(3, 1fr);
}
@media only screen and (max-width: 30rem) {
  .best-sellers .products__gallery ul {
    grid-template-columns: 1fr;
  }
}
</style>
