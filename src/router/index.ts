import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/all-shoes",
    name: "allShoes",
    component: () =>
      import(/* webpackChunkName: "allShoes" */ "../views/AllShoesView.vue"),
  },
  {
    path: "/men",
    name: "men",
    component: () =>
      import(/* webpackChunkName: "men" */ "../views/MenShoesView.vue"),
  },
  {
    path: "/women",
    name: "women",
    component: () =>
      import(/* webpackChunkName: "women" */ "../views/WomenShoesView.vue"),
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

export default router;
