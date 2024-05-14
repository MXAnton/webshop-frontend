import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/select-sex",
    name: "selectSex",
    component: () =>
      import(/* webpackChunkName: "selectSex" */ "../views/SelectSexView.vue"),
  },
  {
    path: "/products/:sex",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductView.vue"),
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: () =>
      import(
        /* webpackChunkName: "pageNotFound" */ "../views/PageNotFoundView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  if (
    store.getters.getMaleCategories.length === 0 ||
    store.getters.getFemaleCategories.length === 0
  ) {
    await store.dispatch("fetchCategories");
  }

  next();
});

export default router;
