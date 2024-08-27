import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About"),
    },
  ],
});
