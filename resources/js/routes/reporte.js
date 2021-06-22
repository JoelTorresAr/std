export const reporte = {
    path: "/spa",
    name: "homeRPT",
    //redirect: "/spa/laboratorio/orden",
    component: () =>
        import("../layouts/Dashboard.vue"),
    children: [
        {
            path: "/spa/reporte/expediente",
            name: "reporte.expendiente",
            component: require('../views/reporte/expediente/Index.vue').default,
        },
    ]
};
