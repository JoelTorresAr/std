<template>
  <v-dialog v-model="dialogState" max-width="40vw">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="py-1 px-1">
            <v-autocomplete
              solo
              label="Estado expediente"
              v-model="editedItem.id_estado"
              :items="entriesEstados"
              item-value="id"
              item-text="nombre"
            >
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="dialogState = false">CANCELAR</v-btn>
        <v-btn color="primary" @click="save()">GUARDAR</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, default: false },
    actions: { type: String, default: "CREATE" },
    item: { type: Object },
  },
  components: {},
  data: () => ({
    loading: false,
    dialogoBusquedaPac: false,
    editedItem: {
      id: null,
      nombre: null,
      id_ubicacion: null,
      ubicacion: null,
      estado: null,
    },
    showForm: {
      ubicacion: false,
    },
    action: {
      ubicacion: "CREATE",
    },
    rules: {
      counter: (value) => 1 <= value <= 15 || "Min 1 - Max 15",
    },
    entriesEstados: [],
    errors: [],
  }),
  computed: {
    formTitle() {
      return this.actions === "CREATE"
        ? "Formulario nuevo expediente"
        : "Formulario actualizar expediente";
    },
    dateLabel() {
      return this.actions === "UPDATE"
        ? "Fecha actualización"
        : "Fecha apertura";
    },
    timeLabel() {
      return this.actions === "UPDATE" ? "Hora actualización" : "Hora apertura";
    },
    dialogState: {
      get() {
        if (this.dialog) {
          if (this.actions === "UPDATE") {
            this.editedItem = this.item;
          }
          this.initState();
        }
        return this.dialog;
      },
      set(val) {
        if (val === false) {
          this.editedItem = {
            id: null,
            nombre: null,
            id_estado: null,
          };
          this.errors = [];
        }
        this.$emit("update:dialog", val);
      },
    },
  },
  watch: {},
  mounted() {
    this.initState();
    this.loadEstados();
  },
  methods: {
    initState() {},
    loadEstados() {
      //PAGINATED ITEMS OF PRESCRIPCIONES
      this.loading = true;
      this.entriesEstados = [];
      axios
        .post("/api/parte/estados-select", this.search)
        .then(({ data }) => {
          this.entriesEstados = data.resultado;
          //this.$store.dispatch("asignQueryParams", this.search);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    save() {
      let id = this.$store.getters.GET_USER_ID;
      this.editedItem.id_empleado_apertura = id;
      let url_action =
        this.actions === "UPDATE"
          ? "/api/parte/estado-update"
          : "/api/oxigeno/prescripcion/store";
      axios
        .post(url_action, this.editedItem)
        .then(({ data }) => {
          if (data.status == "200") {
            Toast.fire({
              icon: "success",
              title: data.message,
            });
            this.$emit("update:actions", "SUCCESS");
            this.dialogState = false;
          } else {
            Toast.fire({
              icon: "error",
              title: data.message,
            });
          }
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: error.response.data.message,
          });
          if (error.response.status == 422) {
            //console.log(errors);
            this.errors = error.response.data.errors;
          }
          // console.log(error.config);
        });
    },
  },
};
</script>

<style scoped>
.input-x-small {
  height: 1.5rem !important;
  width: 10rem !important;
  font-size: 0.8rem !important;
}
.span-x-small {
  height: 1.5rem !important;
  width: 7rem !important;
  font-size: 0.8rem !important;
}
.width-input-x-small {
  width: 10rem !important;
  font-size: 0.8rem !important;
}
.height-input-x-small {
  height: 1.5rem !important;
  font-size: 0.8rem !important;
}
#btn-x-small {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
