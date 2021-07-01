export const expendientesGroup = {
    icon: "mdi-file-document-multiple-outline",
    clave: "FC",
    title: "Expedientes",
    items: [
        {
            icon: "mdi-file-document-outline",
            title: "Expedientes",
            to: { name: "expediente.expediente" },
            clave: "FacturacionCatalogoServicios",
        },
        {
            icon: "mdi-file-document-outline",
            title: "Control",
            to: { name: "control.expediente" },
            clave: "FacturacionCatalogoServicios",
        },
        {
            icon: "mdi-file-document-outline",
            title: "Reportes",
            to: { name: "reporte.expediente" },
            clave: "FacturacionCatalogoServicios",
        },
    ],
};
