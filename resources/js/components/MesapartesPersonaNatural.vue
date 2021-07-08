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
                  color="green accent-1"
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
                  <v-btn small color="error" class="my-2"
                    ><i class="fas fa-download mr-2"></i> Formato Único de
                    Tramite Múltiple (FUTM)</v-btn
                  >
                  <v-btn small color="primary" class="my-2"
                    ><i class="fas fa-download mr-2"></i> Declaración Jurada de
                    Datos de Vehículo <br />
                    Impuesto al Patrimonio Vehicular</v-btn
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
                <v-form lazy-validation>
                  <v-container>
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.dni"
                          :error-messages="errors.dni"
                          dense
                          label="DNI"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.nombres"
                          :error-messages="errors.nombres"
                          label="Nombres"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.apellido_paterno"
                          :error-messages="errors.apellido_paterno"
                          label="Apellido Paterno"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.apellido_materno"
                          :error-messages="errors.apellido_materno"
                          label="Apellido Materno"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.correo"
                          :error-messages="errors.correo"
                          label="Correo Electrónico (*)"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.correo_verificacion"
                          :error-messages="errors.correo_verificacion"
                          label="Confirmar Correo (*)"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.telefono"
                          :error-messages="errors.telefono"
                          label="Teléfono (*)"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.domicilio"
                          :error-messages="errors.domicilio"
                          label="Dimicilio Legal (*)"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-alert dense text color="primary">
                          <strong><b>DATOS DEL DOCUMENTO</b></strong>
                        </v-alert>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                        <v-select
                          clearable
                          :items="entriesTiposDocumentos"
                          v-model="editedItem.id_tipo_documento"
                          :error-messages="errors.id_tipo_documento"
                          label="Tipo Documento"
                          dense
                          outlined
                          item-value="id"
                          item-text="id"
                        ></v-select>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.nro_documento"
                          :error-messages="errors.nro_documento"
                          label="N° de Documento"
                          dense
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <v-text-field
                          v-model="editedItem.nro_folios"
                          :error-messages="errors.nro_folios"
                          label="N° de Folios"
                          dense
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-textarea
                          outlined
                          hide-details
                          v-model="editedItem.asunto"
                          :error-messages="errors.asunto"
                          label="Asunto"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-select
                          :items="entriesTiposTramites"
                          v-model="editedItem.tipo_tramite"
                          hide-details
                          label="Tipo Tramite"
                          dense
                          item-value="id"
                          item-text="text"
                          outlined
                        ></v-select> </v-col
                    ></v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-card flat tile>
                          <v-window v-model="editedItem.tipo_tramite">
                            <v-window-item value="1">
                              <v-row>
                                <v-col cols="8" class="my-1 mr-1 ml-0">
                                  <v-row
                                    v-for="(file, key) in editedItem.files"
                                    :key="key"
                                  >
                                    <v-col cols="12" class="p-2">
                                      <v-file-input
                                        v-model="file.file"
                                        :rules="filesRules"
                                        single-line
                                        show-size
                                        accept="application/pdf"
                                        label="Ningun archivo seleccionado"
                                        :append-outer-icon="
                                          key != 0 ? 'mdi-minus-circle' : ''
                                        "
                                        @click:append-outer="removeFile(key)"
                                      ></v-file-input>
                                    </v-col>
                                  </v-row>
                                </v-col>
                                <v-col cols="3" class="my-1 mx-1"
                                  ><v-btn
                                    color="primary"
                                    @click="addMoreFile()"
                                    v-if="editedItem.files.length < 5"
                                    >AREGAR MÁS</v-btn
                                  >
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="12">
                                  <v-alert
                                    color="red lighten-5"
                                    style="font-size: 13px !important"
                                  >
                                    <ul class="red--text">
                                      <li>Solo formato PDF.</li>
                                      <li>
                                        Tamaño máximo por archivo PDF 5 MB.
                                      </li>
                                    </ul>
                                  </v-alert>
                                </v-col>
                              </v-row>
                            </v-window-item>
                            <v-window-item value="2"
                              >LIC. FUNCIONAMIENTO RIESGO MEDIO</v-window-item
                            >
                          </v-window>
                          <v-window-item value="3"
                            >LIC. FUNCIONAMIENTO BODEGAS</v-window-item
                          >
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                      <v-col cols="auto">
                        <v-btn
                          color="success"
                          @click="registrar()"
                          :loading="loading"
                        >
                          <v-icon left>mdi-telegram</v-icon> REGISTRAR</v-btn
                        >
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
    valid: false,
    loading: false,
    editedItem: {
      dni: null,
      nombres: null,
      apellido_paterno: null,
      apellido_materno: null,
      correo: null,
      correo_verificacion: null,
      telefono: null,
      domicilio: null,
      id_tipo_documento: null,
      nro_documento: null,
      nro_folios: null,
      asunto: null,
      tipo_tramite: null,
      files: [{ file: null }],
    },
    entriesTiposDocumentos: [
      { id: "CARTA" },
      { id: "OFICIO" },
      { id: "MEMORANDO" },
      { id: "INFORME" },
      { id: "INVITACIÓN" },
      { id: "FACTURA" },
      { id: "GUIAS DE REMISIÓN" },
      { id: "SOLICITUD" },
      { id: "CITACIÓN" },
      { id: "OTROS" },
    ],
    entriesTiposTramites: [
      { id: "1", text: "NORMAL" },
      { id: "2", text: "LIC. FUNCIONAMIENTO RIESGO MEDIO" },
      { id: "3", text: "LIC. FUNCIONAMIENTO BODEGAS" },
    ],
    inputErrors: {},
    filesRules: [
      (value) =>
        !value ||
        value.size <= 5000000 ||
        "El documento debe tener un tamaño maximo de 5MB!",
    ],
  }),
  computed: {
    errors() {
      return this.inputErrors;
    },
  },
  mounted() {},
  methods: {
    openParte(action) {
      if (action === "NATURAL") {
        window.location.assign(`/mesa_partes_virtual/p_natural`);
      } else {
        window.location.assign(`/mesa_partes_virtual/p_juridica`);
      }
    },
    addMoreFile() {
      if (this.editedItem.files.length < 5) {
        this.editedItem.files.push({ file: null });
      } else {
        window.alert("Maximo 5 archivos");
      }
    },
    removeFile(index) {
      this.editedItem.files.splice(index, 1);
    },
    registrar() {
      this.loading = true;
      let formData = new FormData();
      this.editedItem.files.forEach((file, index) => {
        if (file.file) {
          formData.append(`file[${index}]`, file.file);
        }
      });
      Object.keys(this.editedItem).forEach((key, index) => {
        formData.append(key, this.editedItem[key]);
      });
      axios
        .post("/api/parte/persona-natural/store", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          Toast.fire({
            icon: "success",
            title: data.message,
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: error.response.data.message,
          });
          if (error.response.status == 422) {
            this.inputErrors = error.response.data.errors;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
