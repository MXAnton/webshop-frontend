import {
  clearLocalStorageCart,
  getLocalStorageCart,
  setLocalStorageCart,
} from "@/helpers";
import {
  getProductsCategories,
  getSizesByIds,
  getProductsFiltersBySex,
} from "@/services/products";
import { createStore } from "vuex";

interface Item {
  id: number;
  quantity: number;
  date_added: number;
}

interface Product {
  id: number;
  color_id: number;
  size: number;
  name: string;
  price: number;
  discount: number;
  quantity: number;
  quantity_available: number;
  date_added: number;
}

export default createStore({
  state: {
    maleCategories: [],
    femaleCategories: [],

    maleFilters: null,
    femaleFilters: null,

    cart: [] as Product[],
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

      // Add only id and quantity to localstorage.
      // The remaining info we want to load fresh every time
      // to make sure price etc are up to date
      const items = data as Item[];
      setLocalStorageCart(
        items.map(({ id, quantity, date_added }) => ({
          id,
          quantity,
          date_added,
        }))
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
        color_id: number;
        size: number;
        name: string;
        price: number;
        discount: number;
        quantity_available: number;
      }

      const localStorageCart = getLocalStorageCart() as Item[];

      if (localStorageCart.length === 0) {
        commit("SET_CART", []);
        return;
      }

      const res = await getSizesByIds(
        localStorageCart.map((_item) => _item.id)
      );
      if (res == null) {
        commit("SET_CART", []);
        return;
      }
      const itemsExtras = res.data.data as ItemInfo[];

      // Merge arrays based on 'id' property
      const itemsInfoMerged = itemsExtras.map((item1) => {
        const item2 = localStorageCart.find((item2) => item2.id === item1.id);
        return { ...item1, ...item2 };
      });

      commit("SET_CART", itemsInfoMerged);
    },

    async addProductCart({ dispatch }, data) {
      const { id, quantity, quantity_available } = data;
      const localStorageCart = getLocalStorageCart() as Item[];

      // Find the index of the object with the given id
      const index = localStorageCart.findIndex((item) => item.id === id);
      if (index !== -1) {
        // If found, update the object at that index
        localStorageCart[index].quantity = Math.min(
          quantity_available || localStorageCart[index].quantity + quantity,
          localStorageCart[index].quantity + quantity
        );
      } else {
        // If not found, add the new object to the array
        localStorageCart.push({
          id: id,
          quantity: quantity,
          date_added: new Date().getTime(),
        });
      }

      setLocalStorageCart(localStorageCart);

      await dispatch("fetchCart");
    },
    async upsertProductCart({ dispatch }, data) {
      const { id, quantity } = data;
      const localStorageCart = getLocalStorageCart() as Item[];

      // Find the index of the object with the given id
      const index = localStorageCart.findIndex((item) => item.id === id);
      if (index !== -1) {
        // If found, update the object at that index
        localStorageCart[index].quantity = quantity;
      } else {
        // If not found, add the new object to the array
        localStorageCart.push({
          id: id,
          quantity: quantity,
          date_added: new Date().getTime(),
        });
      }

      setLocalStorageCart(localStorageCart);

      await dispatch("fetchCart");
    },
    async removeProductCart({ dispatch }, _productId) {
      const localStorageCart = getLocalStorageCart() as Item[];

      // Find the index of the object with the given id
      const index = localStorageCart.findIndex(
        (item) => item.id === _productId
      );
      if (index === -1) {
        return;
      }

      // Remove product from cart
      localStorageCart.splice(index, 1);
      setLocalStorageCart(localStorageCart);

      await dispatch("fetchCart");
    },
  },
  modules: {},
});
