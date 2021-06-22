export const control = {
    path: "/spa",
    name: "homeCT",
    //redirect: "/spa/laboratorio/orden",
    component: () =>
        import("../layouts/Dashboard.vue"),
    children: [
        {
            path: "/spa/control/expendiente",
            name: "control.expediente",
            component: require('../views/control/expediente/Index.vue').default,
        },
    ]
};
