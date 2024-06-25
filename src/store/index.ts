import {
  clearLocalStorageCart,
  getLocalStorageCart,
  setLocalStorageCart,
} from "@/helpers";
import {
  getProductsCategories,
  getProductsColors,
  getProductsFiltersBySex,
} from "@/services/products";
import { createStore } from "vuex";

interface Item {
  id: number;
  size: number;
  quantity: number;
}

export default createStore({
  state: {
    maleCategories: [],
    femaleCategories: [],

    maleFilters: null,
    femaleFilters: null,

    cart: [],
  },
  getters: {
    getMaleCategories(state) {
      return state.maleCategories;
    },
    getFemaleCategories(state) {
      return state.femaleCategories;
    },

    getMaleFilters(state) {
      return state.maleFilters;
    },
    getFemaleFilters(state) {
      return state.femaleFilters;
    },

    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    SET_MALE_CATEGORIES(state, data) {
      state.maleCategories = data;
    },
    SET_FEMALE_CATEGORIES(state, data) {
      state.femaleCategories = data;
    },

    SET_MALE_FILTERS(state, data) {
      state.maleFilters = data;
    },
    SET_FEMALE_FILTERS(state, data) {
      state.femaleFilters = data;
    },

    SET_CART(state, data) {
      state.cart = data;

      // Add only id, size and quantity to localstorage.
      // The remaining info we want to load fresh every time
      // to make sure price etc are up to date
      const items = data as Item[];
      setLocalStorageCart(
        items.map(({ id, size, quantity }) => ({ id, size, quantity }))
      );
    },
    CLEAR_CART(state) {
      state.cart = [];

      clearLocalStorageCart();
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const res = await getProductsCategories();
      if (res == null) {
        return;
      }

      commit("SET_MALE_CATEGORIES", res.data.data[0]);
      commit("SET_FEMALE_CATEGORIES", res.data.data[1]);
    },

    async fetchMaleFilters({ commit }) {
      const res = await getProductsFiltersBySex("male");
      if (res == null) {
        return;
      }

      commit("SET_MALE_FILTERS", res.data.data);
    },
    async fetchFemaleFilters({ commit }) {
      const res = await getProductsFiltersBySex("female");
      if (res == null) {
        return;
      }

      commit("SET_FEMALE_FILTERS", res.data.data);
    },

    async fetchCart({ commit }) {
      interface ItemInfo {
        id: number;
        name: string;
        price: number;
        discount: number;
      }

      const localStorageCart = getLocalStorageCart() as Item[];

      if (localStorageCart.length === 0) {
        commit("SET_CART", []);
        return;
      }

      const res = await getProductsColors(
        localStorageCart.map((_item) => _item.id)
      );
      if (res == null) {
        // commit("SET_CART", []);
        return;
      }
      const itemsExtras = res.data.data as ItemInfo[];

      console.log(localStorageCart);
      console.log(itemsExtras);

      // Merge arrays based on 'id' property
      const itemsInfoMerged = itemsExtras.map((item1) => {
        const item2 = localStorageCart.find((item2) => item2.id === item1.id);
        return { ...item1, ...item2 };
      });

      commit("SET_CART", itemsInfoMerged);
    },
  },
  modules: {},
});
