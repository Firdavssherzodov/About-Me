import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
path:'/',
name:'login',
component:()=> import('../Login.vue')
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("../chat/chat.vue"),
    },
  ],
});

export default router;
