<template>
  <v-row justify="center">
    <v-dialog v-model="dialogState" persistent max-width="80vw">
      <v-card>
        <v-card-title class="py-0 my-0"> administrador </v-card-title>
        <v-card-title class="py-0 my-0">
          <v-text-field
            class="py-0 my-0"
            v-model="search.param"
            append-icon="mdi-magnify"
            label="Ingrese el nombre del modulo a buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-data-table
            :headers="headers"
            :items="entriesItems"
            :loading="loading"
            class="elevation-1"
            :search="search.param"
            loading-text="Consultando items..."
            item-key="IdPrueba"
          >
            <template v-slot:item.listar="{ item }">
              <input type="checkbox" value="Boat" :checked='item.listar' />
            </template>
            <template v-slot:item.crear="{ item }">
              <input type="checkbox" value="Boat" :checked='item.crear' />
            </template>
            <template v-slot:item.editar="{ item }">
              <input type="checkbox" value="Boat" :checked='item.editar' />
            </template>
            <template v-slot:item.eliminar="{ item }">
              <input type="checkbox" value="Boat" :checked='item.eliminar' />
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-show="search.tipe === 'Editar'"
            color="blue darken-1"
            text
            @click="sincronizarItems()"
          >
            Guardar Cambios
          </v-btn>
          <v-btn color="green darken-1" text @click="dialogState = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
    entriesItems: [],
    headers: [],
    itemsSelected: [],
    editedItem: {
      id: null,
      nombre: null,
      id_ubicacion: null,
      ubicacion: null,
      estado: null,
    },
    search: {
      param: "",
      tipe: "",
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
    entriesUbicaciones: [],
    errors: [],
  }),
  computed: {
    formTitle() {
      return this.actions === "CREATE"
        ? "Formulario nuevo rol"
        : "Formulario actualizar rol";
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
    this.headers = [
      { text: "Nombre", value: "name", sortable: false },
      { text: "Crear", value: "crear", sortable: false },
      { text: "Editar", value: "editar", sortable: false },
      { text: "Listar", value: "listar", sortable: false },
      { text: "Eliminar", value: "eliminar", sortable: false },
    ];
    this.entriesItems = [
      {
        name: "usuarios",
        crear: true,
        editar: true,
        listar: true,
        eliminar: true,
      },
      {
        name: "roles",
        crear: true,
        editar: true,
        listar: true,
        eliminar: true,
      },
      {
        name: "expediente",
        crear: true,
        editar: true,
        listar: true,
        eliminar: true,
      },
      {
        name: "reportes",
        crear: true,
        editar: true,
        listar: true,
        eliminar: true,
      },
    ];
  },
  methods: {
    initState() {},
    save() {
      let id = this.$store.getters.GET_USER_ID;
      this.editedItem.id_empleado_apertura = id;
      let url_action =
        this.actions === "UPDATE"
          ? "/api/oxigeno/prescripcion/update"
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
