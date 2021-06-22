export const mantenimiento = {
    path: "/spa",
    name: "homeMT",
    //redirect: "/spa/laboratorio/orden",
    component: () =>
        import("../layouts/Dashboard.vue"),
    children: [
        {
            path: "/spa/mantenimiento/usuarios",
            name: "mantenimiento.usuarios",
            component: require('../views/mantenimiento/usuarios/Index.vue').default,
        },
        {
            path: "/spa/mantenimiento/roles",
            name: "mantenimiento.roles",
            component: require('../views/mantenimiento/roles/Index.vue').default,
        },
    ]
};
