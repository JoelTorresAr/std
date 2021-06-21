export const mantenimientoGroup = {
    icon: "mdi-tools",
    clave: "FC",
    title: "Mantenimiento",
    items: [
        {
            icon: "mdi-account-cog",
            title: "Usuarios",
            to: { name: "mantenimiento.usuarios" },
            clave: "FacturacionCatalogoServicios",
        },
        {
            icon: "mdi-shield-key-outline",
            title: "Roles",
            to: { name: "mantenimiento.roles" },
            clave: "FacturacionCatalogoServicios",
        },
    ],
};
