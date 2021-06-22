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
            <v-toolbar-title>EXPENDIENTES</v-toolbar-title>
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
                      label="Tip. Busqusqueda"
                      v-model="search.tipo"
                      :items="searchTipesItems"
                      item-value="id"
                      item-text="value"
                      persistent-hint
                    ></v-select>
                  </div>
                  <v-text-field
                    class="form-control my-0 py-0"
                    style="width: 18rem !important"
                    v-model="search.param"
                    label="Parametro busqueda de almacenes"
                    single-line
                    hide-details
                    v-on:keyup.enter="loadItems"
                  ></v-text-field>
                  <v-btn
                    depressed
                    class="btn btn-outline-secondary form-control"
                    color="primary"
                    :loading="loading"
                    @click="loadItems"
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
              class="float-right text-xs mr-2"
              :loading="loading"
              @click="showForm.expediente = true"
            >
              <i class="fa fa-plus"></i> &nbsp; REGISTRAR
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.estado="{ item }">
          <v-chip :color="item.estado === 'Abierto' ? 'green' : ''" x-small>
            <b>{{ item.estado }}</b></v-chip
          >
        </template>
        <template v-slot:item.doc="{ item }">
          <v-btn x-small outlined color="primary darken-1" class="mr-2"
            >Descargar</v-btn
          >
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn x-small outlined color="green darken-1" class="mr-2"
            >Editar</v-btn
          >
        </template>
      </v-data-table>
      <v-row>
        <v-col cols="4" sm="3">
          <v-select
            v-model="search.pageSize"
            :items="pageSizes"
            label="Elementos por página"
            @change="handlePageSizeChange"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="9">
          <v-pagination
            v-model="search.page"
            :length="search.totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
            class="align-content-end"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-card-text>
    <expediente-form
      :dialog.sync="showForm.expediente"
      :actions.sync="actionForm.expediente"
    ></expediente-form>
  </v-card>
</template>

<script>
export default {
  props: {
    clave: { type: String, required: false, default: "CLAVESUBMODULO" },
  },
  components: {
    ExpedienteForm: () => import("./FormExpediente.vue"),
  },
  data: () => ({
    pageSizes: [3, 6, 9],
    loading: false,
    entriesItems: [],
    headers: [],
    searchTipesItems: [],
    showForm: {
      expediente: false,
      prescripcionDetalles: false,
      contabilizarProdForm: false,
    },
    search: {
      tipo: "",
      param: "",
      estadoBusSelec: "0",
      page: 1,
      totalPages: 0,
      pageSize: 9,
    },
    actionForm: {
        expediente: 'CREATE'
    },
    itemSelected: null,
  }),
  mounted() {
    this.initialForm();
    this.headers = [
      { text: "N°", value: "id", sortable: false },
      { text: "Persona", value: "persona", sortable: false },
      { text: "Asunto", value: "asunto", sortable: false },
      { text: "Email", value: "email", sortable: false },
      { text: "Tip. Doc.", value: "tipo_documento", sortable: false },
      { text: "Fecha Creación", value: "created_at", sortable: false },
      { text: "Documento", value: "doc", sortable: false },
      { text: "", value: "actions", sortable: false },
    ];
    this.entriesItems = [
      {
        id: 1,
        persona: "Tania Carranza Blas",
        asunto: "Solicitud de licencia",
        email: "admin@hotmail.com",
        tipo_documento: "DNI",
        created_at: `${new Date()
          .toLocaleString("en-GB", { timeZone: "America/Lima" })
          .substr(0, 17)
          .replace(",", "")}`,
      },
    ];
    this.searchTipesItems = [];
    //this.search = await this.$store.dispatch("loadQueryParams", this.search);
    //this.loadItems();
  },
  methods: {
    initialForm() {
      this.search.page = 1;
      this.search.totalPages = 0;
      this.entriesItems = [];
    },
    handlePageChange(value) {
      this.search.page = value;
      this.loadItems();
    },
    handlePageSizeChange(size) {
      this.search.pageSize = size;
      this.search.page = 1;
      this.loadItems();
    },
    loadItems() {
      //PAGINATED ITEMS OF PRESCRIPCIONES
      this.loading = true;
      this.entriesItems = [];
      axios
        .post("/api/ejemplo", this.search)
        .then(({ data }) => {
          this.entriesItems = data.resultado.data;
          this.totalPages = data.resultado.last_page;
          //this.$store.dispatch("asignQueryParams", this.search);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>
