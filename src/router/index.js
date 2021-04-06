import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/dashboard/Main.vue";
import Auth from "../views/auth/AuthHolder.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: "/auth/login",
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "Register your place",
    },
  },
  {
    path: "/auth/",
    name: "AuthHolder",
    component: Auth,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
        meta: {
          title: "Login into your account",
        },
      },
    ],
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
