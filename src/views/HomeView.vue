<template>
  <main class="home">
    <section class="hero">
      <div class="section__wrapper">
        <div class="hero__content">
          <h1 class="logo-font">YOUR SHOES</h1>
          <p>Find your next shoes,<br />or add on to your collection</p>

          <router-link to="/all-shoes" class="btn--primary mt-1"
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
        <ul>
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
          </li>
        </ul>
      </div>
    </section>

    <section class="best-sellers" id="best-sellers">
      <div class="section__wrapper">
        <h2>BEST SELLERS</h2>

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
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LocalShippingIcon from "@/components/icons/LocalShippingIcon.vue";
import UndoIcon from "@/components/icons/UndoIcon.vue";
import PaymentsIcon from "@/components/icons/PaymentsIcon.vue";
import FavoriteIcon from "@/components/icons/FavoriteIcon.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    LocalShippingIcon,
    UndoIcon,
    PaymentsIcon,
    FavoriteIcon,
  },
});
</script>

<style scoped>
/* HERO */
.hero {
  width: 100%;
  min-height: 80vh;
}

.hero .section__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.25rem;
}

.hero p {
  font-size: 1.25rem;
}

.hero__img-wrapper {
  max-width: 35rem;
}
.hero__img-wrapper img {
  width: 100%;
}

/* PURSHASE INFO */
.purshase-info {
  background-color: var(--color-secondary);
  color: var(--color-background);
}

.purshase-info ul {
  display: flex;
  gap: 3rem;
  justify-content: space-between;
}

.purshase-info li {
  max-width: 20rem;
  display: flex;
  gap: 1.125rem;
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

.best-sellers ul {
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

  height: 13.75em;

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
