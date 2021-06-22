import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import { mantenimiento } from './mantenimiento';
import { expediente } from './expediente';
import { control } from './control';
import { reporte } from './reporte';

const routes = [
    mantenimiento,
    control,
    expediente,
    reporte
];

const router = new VueRouter({
    mode: "history",
    base: process.env.APP_URL,
    routes
});

export default router;
