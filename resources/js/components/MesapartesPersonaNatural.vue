<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title class="justify-center black white--text"
        >MESA DE PARTES VIRTUALES</v-card-title
      >
      <v-card-text>
        <v-row justify="center" no-gutters>
          <v-col cols="6" class="mx-2">
            <v-card>
              <v-card-title> Datos del solicitante </v-card-title>
              <v-card-text>
                <v-alert
                  border="left"
                  colored-border
                  color="deep-purple accent-4"
                  elevation="0"
                  style="font-size: 13px !important"
                >
                  <i class="far fa-check-square"></i>
                  Para el registro del expediente se requería documentación
                  necesaria para su validación
                  (informes,formularios,fichas,etc).<br />
                  <i class="far fa-check-square"></i>
                  Cada expediente registrado podrá hacerle seguimiento con su
                  DNI o RUC en
                  <v-btn x-small color="primary"
                    ><i class="fas fa-search"></i>consulta expendiente</v-btn
                  >
                  <br />
                  <i class="far fa-check-square"></i>
                  Es necesario escanear y subir el documento en formato PDF.
                  <br />
                  <i class="far fa-check-square"></i>
                  En el caso de subsanar la documentación se le notificará vía
                  e-mail para que realice las correcciones en un máximo plazo de
                  2 días hábiles según el artículo 125 de la ley 27444.
                  <br />
                  <i class="far fa-check-square"></i>
                  Horario de recepción de documentos es de 08:00am - 2:00pm de
                  lunes a viernes.
                  <br />
                  <i class="far fa-check-square"></i>
                  Solicitud enviada pasada el horario de atención será
                  considerada al día hábil siguiente.
                  <br />
                  <br />
                  <v-btn x-small color="error"
                    ><i class="fas fa-download"></i> Formato Único de Tramite
                    Múltiple (FUTM)</v-btn
                  >
                  <v-btn x-small color="primary"
                    ><i class="fas fa-download"></i> Declaración Jurada de Datos
                    de Vehículo - Impuesto al Patrimonio Vehicular</v-btn
                  >
                  <v-row justify="space-around" class="mt-5">
                    <v-col cols="auto">
                      <button>
                        <v-card class="rounded-0">
                          <v-img
                            style="width: 150px !important; heigth: 250px"
                            src="/img/icono_guia_mesa.png"
                          >
                          </v-img>
                        </v-card>
                      </button>
                    </v-col>
                  </v-row>
                </v-alert>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="editedItem.dni"
                          :error="errors.dni"
                          dense
                          label="DNI"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="editedItem.nombres"
                          :error="errors.nombres"
                          label="Nombres"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="editedItem.apellido_paterno"
                          :error="errors.apellido_paterno"
                          label="Apellido Paterno"
                          dense
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="editedItem.apellido_materno"
                          :error="errors.apellido_materno"
                          label="Apellido Materno"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3" class="mx-2"> </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    editedItem: {
      dni: null,
      nombres: null,
      apellido_paterno: null,
      apellido_materno: null,
      correo: null,
      correo_verificacion: null,
      telefono: null,
      domicilio: null,
    },
    errors: [],
  }),
  mounted() {},
  methods: {
    openParte(action) {
      if (action === "NATURAL") {
        window.location.assign(`/mesa_partes_virtual/p_natural`);
      } else {
        window.location.assign(`/mesa_partes_virtual/p_juridica`);
      }
    },
  },
};
</script>
