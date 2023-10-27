<template>
  <header>
    <nav class="header__nav-left">
      <ul>
        <li>
          <router-link to="/">
            <img
              width="48"
              height="48"
              alt="Your Shoes logo with text YOUR and below is an image of a shoe"
              src="../assets/logos/logo2_background.svg"
          /></router-link>
        </li>

        <li>
          <div class="dropdown-1">
            <router-link class="btn" to="/men">
              <span>MEN</span>
              <ExpandMoreIcon
            /></router-link>

            <ul class="dropdown__content">
              <li>
                <router-link
                  :to="{ path: 'men', params: { category: 'sneakers' } }"
                  >Sneakers</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ path: 'men', params: { category: 'dress shoes' } }"
                  >Dress shoes</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ path: 'men', params: { category: 'slippers' } }"
                  >Slippers</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="dropdown-1">
            <router-link class="btn" to="/women">
              <span>WOMEN</span>
              <ExpandMoreIcon
            /></router-link>

            <ul class="dropdown__content">
              <li>
                <router-link
                  :to="{ path: 'women', params: { category: 'boots' } }"
                  >Boots</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ path: 'women', params: { category: 'loafers' } }"
                  >Loafers</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ path: 'women', params: { category: 'flips' } }"
                  >Flips</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </nav>

    <nav class="header__nav-right">
      <ul>
        <li>
          <div class="input-1--search">
            <input
              type="text"
              name="search-input"
              id="search-input"
              placeholder="Search your shoe"
            />
            <label for="search-input"
              ><SearchIcon width="32" height="32"
            /></label>
          </div>
        </li>

        <li>
          <router-link to="/saved-shoes">
            <FavoriteIcon width="32" height="32"
          /></router-link>
        </li>
        <li>
          <router-link to="/basket">
            <ShoppingBagIcon width="32" height="32"
          /></router-link>
        </li>
        <li>
          <router-link to="/account">
            <AccountCircleIcon width="32" height="32"
          /></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FavoriteIcon from "@/components/icons/FavoriteIcon.vue";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon.vue";
import AccountCircleIcon from "@/components/icons/AccountCircleIcon.vue";

export default defineComponent({
  name: "HeaderComp",
  components: {
    ExpandMoreIcon,
    SearchIcon,
    FavoriteIcon,
    ShoppingBagIcon,
    AccountCircleIcon,
  },
});
</script>

<style scoped>
header {
  width: 100%;
  max-width: 80rem;

  margin: 0 auto;
  padding: 1rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Arvo", serif; /* LOGO FONT */
  font-size: 1rem;
}

/* NAV LEFT */
.header__nav-left > ul {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* NAV RIGHT */
.header__nav-right > ul {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
