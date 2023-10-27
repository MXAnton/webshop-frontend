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
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
