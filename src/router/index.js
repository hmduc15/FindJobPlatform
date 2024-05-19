import { createRouter, createWebHistory  } from "vue-router";
import authRouter from "./auth/authRouter";

const routers = [
    ...authRouter
];

const vueRouter = createRouter({
    history: createWebHistory(),
    routes: routers
});

export default vueRouter; 