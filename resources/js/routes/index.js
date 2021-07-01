import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import { mantenimiento } from './mantenimiento';
import { expediente } from './expediente';

const routes = [
    mantenimiento,
    expediente
];

const router = new VueRouter({
    mode: "history",
    base: process.env.APP_URL,
    routes
});

export default router;
