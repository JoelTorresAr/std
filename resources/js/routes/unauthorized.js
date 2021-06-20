export const unauthorizedRoute = {
    path:"/spa/*",
    name:"unauthorized",
    component: () => import('../views/401.vue')
};
