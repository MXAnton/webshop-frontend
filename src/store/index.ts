import { getProductsCategories } from "@/services/products";
import { createStore } from "vuex";

export default createStore({
  state: {
    maleCategories: [],
    femaleCategories: [],
  },
  getters: {
    getMaleCategories(state) {
      return state.maleCategories;
    },
    getFemaleCategories(state) {
      return state.femaleCategories;
    },
  },
  mutations: {
    SET_MALE_CATEGORIES(state, data) {
      state.maleCategories = data;
    },
    SET_FEMALE_CATEGORIES(state, data) {
      state.femaleCategories = data;
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
  },
  modules: {},
});
