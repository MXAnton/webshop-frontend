<template>
  <header>
    <nav class="header__nav-left">
      <ul>
        <li>
          <router-link to="/" class="btn--icon">
            <img
              width="48"
              height="48"
              alt="Your Shoes logo with text YOUR and below is an image of a shoe"
              src="../assets/logos/logo2_background.svg"
          /></router-link>
        </li>

        <li class="header--large">
          <div class="dropdown-1">
            <router-link class="btn" to="/products/men">
              <span>Men</span>
              <ExpandMoreIcon
            /></router-link>

            <ul class="dropdown__content">
              <li v-for="maleCategory in getMaleCategories" :key="maleCategory">
                <router-link
                  :to="{
                    name: 'productsMen',
                    query: { categories: maleCategory },
                  }"
                  >{{ maleCategory }}</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="header--large">
          <div class="dropdown-1">
            <router-link class="btn" to="/products/women">
              <span>Women</span>
              <ExpandMoreIcon
            /></router-link>

            <ul class="dropdown__content">
              <li
                v-for="femaleCategory in getFemaleCategories"
                :key="femaleCategory"
              >
                <router-link
                  :to="{
                    name: 'productsWomen',
                    query: { categories: femaleCategory },
                  }"
                  >{{ femaleCategory }}</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="header--large">
          <router-link to="/about">About</router-link>
        </li>
        <li class="header--large">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    <nav class="header__nav-right">
      <ul>
        <!-- <li>
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
        </li> -->

        <li>
          <router-link to="/saved-shoes" class="btn--icon">
            <FavoriteIcon width="32" height="32"
          /></router-link>
        </li>
        <li>
          <router-link to="/basket" class="btn--icon">
            <ShoppingBagIcon width="32" height="32"
          /></router-link>
        </li>
        <li>
          <router-link to="/account" class="btn--icon">
            <AccountCircleIcon width="32" height="32"
          /></router-link>
        </li>
        <li class="header--medium">
          <div class="hamburger-menu" ref="hamburgerMenu">
            <button @click="menuOpen = !menuOpen" class="btn--link">
              <HamburgerMenuIcon :size="'2rem'" :is-cross="menuOpen" />
            </button>

            <nav v-if="menuOpen">
              <ul>
                <li>
                  <div class="dropdown-1">
                    <router-link class="btn" to="/products/men">
                      <span>Men</span>
                      <ExpandMoreIcon
                    /></router-link>

                    <ul class="dropdown__content">
                      <li
                        v-for="maleCategory in getMaleCategories"
                        :key="maleCategory"
                      >
                        <router-link
                          :to="{
                            name: 'productsMen',
                            query: { categories: maleCategory },
                          }"
                          >{{ maleCategory }}</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="dropdown-1">
                    <router-link class="btn" to="/products/women">
                      <span>Women</span>
                      <ExpandMoreIcon
                    /></router-link>

                    <ul class="dropdown__content">
                      <li
                        v-for="femaleCategory in getFemaleCategories"
                        :key="femaleCategory"
                      >
                        <router-link
                          :to="{
                            name: 'productsWomen',
                            query: { categories: femaleCategory },
                          }"
                          >{{ femaleCategory }}</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon.vue";
// import SearchIcon from "@/components/icons/SearchIcon.vue";
import FavoriteIcon from "@/components/icons/FavoriteIcon.vue";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon.vue";
import AccountCircleIcon from "@/components/icons/AccountCircleIcon.vue";
import HamburgerMenuIcon from "@/components/icons/HamburgerMenuIcon.vue";

import store from "@/store";

export default defineComponent({
  name: "HeaderComp",
  components: {
    ExpandMoreIcon,
    FavoriteIcon,
    ShoppingBagIcon,
    AccountCircleIcon,
    HamburgerMenuIcon,
  },

  data() {
    return {
      menuOpen: false,
    };
  },

  watch: {
    $route() {
      this.menuOpen = false;
    },
  },

  computed: {
    getMaleCategories() {
      return store.getters.getMaleCategories;
    },
    getFemaleCategories() {
      return store.getters.getFemaleCategories;
    },
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

  z-index: 2;
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

header button,
header a {
  text-transform: uppercase;
}

/* ____ HAMBURGER MENU NAV ___ */
.hamburger-menu {
  position: relative;
}
.hamburger-menu > button {
  display: block;
}

.hamburger-menu > nav {
  z-index: 3;
  position: absolute;
  top: calc(100% + 0.6em);
  right: 0;

  padding: 1.6em 1.8em 2em;

  --color-background: var(--black);
  background-color: var(--white);
  border-radius: 4px;
  border: 1px solid var(--color-grey--light-2);
  --color-text: var(--black);

  transform-origin: calc(100% - 0.2em) top;
  animation: hamburger-menu-open 0.2s forwards ease-in-out;
}
.hamburger-menu > nav > ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
}
.hamburger-menu > nav > ul ul {
  --color-text: var(--white-2);
}

@keyframes hamburger-menu-open {
  0% {
    opacity: 0;
    transform: scaleX(0.1) scaleY(0) scaleZ(1);
  }
  20% {
    opacity: 0.1;
    transform: scaleX(0.2) scaleY(0.4) scaleZ(1);
  }
  100% {
    opacity: 1;
    transform: scaleX(1) scaleY(1) scaleZ(1);
  }
}

.header--large {
  display: block;
}
.header--medium {
  display: none;
}
@media only screen and (max-width: 50rem) {
  .header--large {
    display: none;
  }
  .header--medium {
    display: block;
  }
}
</style>
