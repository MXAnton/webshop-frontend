import {
  getProductsCategories,
  getProductsFiltersBySex,
} from "@/services/products";
import { createStore } from "vuex";

export default createStore({
  state: {
    maleCategories: [],
    femaleCategories: [],

    maleFilters: null,
    femaleFilters: null,
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
  },
  modules: {},
});
