<template>
  <v-dialog v-model="dialogState" max-width="30vw">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="py-1 px-1">
            <v-text-field
              label="Nombre"
              v-model="editedItem.name"
              :error-messages="errors.name"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="py-1 px-1">
            <v-text-field
              label="Apellido Paterno"
              v-model="editedItem.apellido_paterno"
              :error-messages="errors.apellido_paterno"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="py-1 px-1">
            <v-text-field
              label="Apellido Materno"
              v-model="editedItem.apellido_materno"
              :error-messages="errors.apellido_materno"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="py-1 px-1">
            <v-text-field
              label="Correo"
              v-model="editedItem.email"
              :error-messages="errors.email"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="py-1 px-1">
            <v-text-field
              label="Contraseña"
              type="password"
              v-model="editedItem.password"
              :error-messages="errors.password"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="py-1 px-1">
            <v-text-field
              label="Confirmar contraseña"
              type="password"
              v-model="editedItem.password_confirmation"
              :error-messages="errors.password_confirmation"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="py-1 px-1">
            <v-autocomplete
              solo
              label="Roles"
              v-model="editedItem.cantidad"
              :items="entriesUbicaciones"
              :error-messages="errors.cantidad"
              append-outer-icon="mdi-map-marker-plus-outline"
              @click:append-outer="showForm.ubicacion = true"
              item-value="cantidad"
              item-text="descripcion"
              clearable
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
      name: null,
      apellido_paterno: null,
      apellido_materno: null,
      email: null,
      password: null,
      password_confirmation: null,
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
        ? "Formulario nuevo usuario"
        : "Formulario actualizar usuario";
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
            name: null,
            apellido_paterno: null,
            apellido_materno: null,
            email: null,
            password: null,
            password_confirmation: null,
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
  },
  methods: {
    initState() {},
    save() {
      let id = this.$store.getters.GET_USER_ID;
      this.editedItem.id_empleado_apertura = id;
      let url_action =
        this.actions === "UPDATE"
          ? "/api/usuario/update"
          : "/api/usuario/store";
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
