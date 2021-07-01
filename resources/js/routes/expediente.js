export const expediente = {
    path: "/spa",
    name: "homeEXP",
    //redirect: "/spa/laboratorio/orden",
    component: () =>
        import("../layouts/Dashboard.vue"),
    children: [
        {
            path: "/spa/expediente/expediente",
            name: "expediente.expediente",
            component: require('../views/expediente/expediente/Index.vue').default,
        },
        {
            path: "/spa/expediente/control",
            name: "control.expediente",
            component: require('../views/expediente/control/Index.vue').default,
        },
        {
            path: "/spa/expediente/reporte",
            name: "reporte.expediente",
            component: require('../views/expediente/reportes/Index.vue').default,
        }
    ]
};
