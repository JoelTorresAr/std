import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import { mantenimiento } from './mantenimiento';

const routes = [
    mantenimiento
];

const router = new VueRouter({
    mode: "history",
    base: process.env.APP_URL,
    routes
});

export default router;
