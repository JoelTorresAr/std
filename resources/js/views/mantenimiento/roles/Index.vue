<template>
  <v-card>
    <v-card-text class="pb-0">
      <v-data-table
        :headers="headers"
        :items="entriesItems"
        :loading="loading"
        loading-text="Cargando..."
        class="elevation-1"
        disable-pagination
        :hide-default-footer="true"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Roles</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-row>
              <v-col cols="auto" class="py-0">
                <div class="input-group">
                  <div style="width: 200px !important">
                    <v-select
                      dense
                      solo
                      hide-details
                      single-line
                      class="form-control"
                      label="Tip. Busq. Paciente"
                      v-model="search.tipo"
                      :items="tiposBusquedasPresc"
                      item-value="id"
                      item-text="value"
                      persistent-hint
                    ></v-select>
                  </div>
                  <v-text-field
                    class="form-control my-0 py-0"
                    style="width: 18rem !important"
                    v-model="search.param"
                    label="Parametro busqueda de paciente"
                    single-line
                    hide-details
                    v-on:keyup.enter="loadPrescripciones"
                  ></v-text-field>
                  <div style="width: 130px !important">
                    <v-select
                      dense
                      solo
                      hide-details
                      single-line
                      label="Estados"
                      v-model="search.estadoBusSelec"
                      :items="estadosBusquedaPresc"
                      item-value="id"
                      item-text="value"
                      persistent-hint
                    ></v-select>
                  </div>
                  <v-btn
                    depressed
                    class="btn btn-outline-secondary form-control"
                    color="primary"
                    :loading="loading"
                    @click="loadPrescripciones"
                  >
                    Buscar
                  </v-btn>
                  <v-btn
                    depressed
                    class="btn btn-outline-secondary mb-2 form-control"
                    color="secundary"
                    :loading="loading"
                    @click="limpiar()"
                  >
                    Limpiar
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-btn
              depressed
              color="primary"
              class="float-right text-xs mx-2"
              :loading="loading"
              @click="closeLote()"
            >
              <i class="fa fa-plus"></i> &nbsp; Contabilizar Prod.
            </v-btn>
            <v-btn
              depressed
              color="success"
              class="float-right text-xs"
              :loading="loading"
              @click="openProductionForm()"
            >
              <i class="fa fa-plus"></i> &nbsp; Registrar
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.cantidad="{ item }">
          <span>{{ `${parseFloat(item.cantidad)} ` }}L/min</span>
        </template>
        <template v-slot:item.total="{ item }">
          <span
            >{{ `${parseFloat(item.total).toFixed(3)} ` }}m<sup>3</sup></span
          >
        </template>
        <template v-slot:item.estado="{ item }">
          <v-chip :color="item.estado === 'Abierto' ? 'green' : ''" x-small>
            <b>{{ item.estado }}</b></v-chip
          >
        </template>
        <template v-slot:item.fecha_apertura="{ item }">
          <span>{{ `${item.fecha_apertura} ${item.hora_apertura}` }}</span>
        </template>
        <template v-slot:item.fecha_calculo="{ item }">
          <span>{{ `${item.fecha_calculo ? item.fecha_calculo : ""}` }}</span>
        </template>
        <template v-slot:item.fecha_cierre="{ item }">
          <span>{{
            `${item.fecha_cierre ? item.fecha_cierre : ""} ${
              item.hora_cierre ? item.hora_cierre : ""
            }`
          }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ma-2" v-bind="attrs" v-on="on" color="primary">
                Acciones
                <v-icon right dark>
                  mdi-arrow-down-drop-circle-outline
                </v-icon></v-btn
              >
            </template>
            <v-list dense>
              <v-list-item
                @click="updateConsumo(item)"
              >
                <v-list-item-title class="blue--text">
                  <v-icon color="blue" left dark> mdi-pencil-outline </v-icon>
                  Actualizar prescripción</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                @click="viewDetalle(item)"
              >
                <v-list-item-title class="green--text">
                  <v-icon color="green" left dark> mdi-eye-outline </v-icon>
                  Detalles</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                @click="closePrescripcion(item)"
              >
                <v-list-item-title class="deep-purple--text">
                  <v-icon color="deep-purple" left dark>
                    mdi-close-network
                  </v-icon>
                  Finalizar</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
      <v-row>
        <v-col cols="4" sm="3">
          <v-select
            v-model="pageSize"
            :items="pageSizes"
            label="Elementos por página"
            @change="handlePageSizeChange"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="9">
          <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
            class="align-content-end"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: { clave: { type: String, required: false, default: "OXPRESC" } },
  components: {
    //PrescripcionForm: () => import("./PrescripcionForm.vue"),
  },
  data: () => ({
    pageSizes: [3, 6, 9],
    loading: false,
    entriesItems: [],
    headers: [],
    show: {
      productionForm: false,
      prescripcionDetalles: false,
      contabilizarProdForm: false,
    },
    search: {
      tipo: "id_atencion",
      param: "",
      estadoBusSelec: "0",
      page: 1,
      totalPages: 0,
      pageSize: 9,
    },
    actionsPrescForm: "NONE",
    actionsContProdForm: "CREATE",
    PrescSelected: null,
    tiposBusquedasPresc: [],
    estadosBusquedaPresc: [],
  }),
  watch: {
    actionsPrescForm(val) {
      if (val === "SUCCESS") {
        this.loadPrescripciones();
      }
    },
    actionsContProdForm(val) {
      if (val === "SUCCESS") {
        this.loadPrescripciones();
      }
    },
  },
  computed: {
    page: {
      get() {
        return this.search.page;
      },
      set(val) {
        this.search.page = val;
      },
    },
    totalPages: {
      get() {
        return this.search.totalPages;
      },
      set(val) {
        this.search.totalPages = val;
      },
    },
    pageSize: {
      get() {
        return this.search.pageSize;
      },
      set(val) {
        this.search.pageSize = val;
      },
    },
  },
  mounted() {
    this.loadPrescripciones();
    this.headers = [
      { text: "N° Cuenta", value: "id_atencion", sortable: false },
      { text: "Paciente", value: "Paciente", sortable: false },
      { text: "Flujo Actual", value: "cantidad", sortable: false },
      { text: "Cons. Actual", value: "total", sortable: false },
      { text: "Apertura", value: "fecha_apertura", sortable: false },
      { text: "Ultimo calc.", value: "fecha_calculo", sortable: false },
      { text: "Cierre", value: "fecha_cierre", sortable: false },
      { text: "Estado", value: "estado", sortable: false },
      { text: "", value: "actions", sortable: false },
    ];
    this.tiposBusquedasPresc = [
      { id: "id_atencion", value: "N° Cuenta" },
      { id: "ApeNom", value: "Apell. y Nomb." },
      { id: "receta", value: "Receta" },
    ];
    this.estadosBusquedaPresc = [
      { id: "0", value: "Todos" },
      { id: "1", value: "Abierto" },
      { id: "2", value: "Cerrado" },
      { id: "3", value: "Finalizado" },
      { id: "4", value: "Baja" },
    ];
    this.loadParameters();
  },
  methods: {
    initialForm() {
      this.page = 1;
      this.totalPages = 0;
      this.entriesItems = [];
    },
    handlePageChange(value) {
      this.page = value;
      this.loadPrescripciones();
    },
    handlePageSizeChange(size) {
      this.pageSize = size;
      this.page = 1;
      this.loadPrescripciones();
    },
    loadPrescripciones() {
      this.loading = true;
      this.items = [];
      axios
        .post("/api/oxigeno/prescripciones/index", {
          page: this.search.page,
          pagesize: this.search.pageSize,
          search: this.search,
        })
        .then(({ data }) => {
          this.entriesItems = data.resultado.data;
          this.totalPages = data.resultado.last_page;
          this.asignParameters(this.search);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    closeLote() {
      this.actionsContProdForm = "CREATE";
      this.show.contabilizarProdForm = true;
    },
    closePrescripcion({ id }) {
      this.loading = true;
      let id_emp = this.$store.getters.GET_USER_ID;
      axios
        .post("/api/oxigeno/prescripcion/cerrar", {
          id_empleado: id_emp,
          id_prescripcion: id,
        })
        .then(({ data }) => {
          if (data.status == "200") {
            Toast.fire({
              icon: "success",
              title: data.message,
            });
            this.loadPrescripciones();
          } else {
            Toast.fire({
              icon: "error",
              title: data.message,
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    limpiar() {
      this.page = 1;
      this.totalPages = 0;
      Object.assign(this.search, {
        tipo: "id_atencion",
        param: "",
        estadoBusSelec: "0",
      });
      this.loadPrescripciones();
    },
    viewDetalle(item) {
      this.show.prescripcionDetalles = true;
      this.PrescSelected = item;
    },
    updateConsumo(item) {
      this.PrescSelected = item;
      this.openProductionForm("UPDATE");
    },
    openProductionForm(Action = "CREATE") {
      this.show.productionForm = true;
      this.actionsPrescForm = Action;
    },
    isInteger(value) {
      return /^\d+$/.test(value);
    },
    loadParameters() {
      let query = Object.assign({}, this.$route.query);
      let tempKey = {};
      Object.keys(this.search).forEach((key, index) => {
        if (key in query) {
          this.search[key] = this.isInteger(query[key])
            ? Number(query[key])
            : query[key];
        } else {
          tempKey[key] = this.search[key];
          Object.assign(query, tempKey);
          this.$router.push({ query });
        }
      });
    },
    asignParameters(item) {
      let query = Object.assign({}, this.$route.query);
      Object.assign(query, item);
      this.$router.push({ query }).catch((error)=>{console.log('asign')});
    },
  },
};
</script>

<style>
</style>
