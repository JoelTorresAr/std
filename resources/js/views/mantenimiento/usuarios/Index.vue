<template>
  <div>
    <v-toolbar outlined flat fixed class="mt-2">
      <v-row>
        <v-col cols="3" class="py-0">
          <v-select
            hide-details
            single-line
            dense
            filled
            label="Tip. Busq. Empleado"
            v-model="tipBusSelecEmp"
            :items="tiposBusquedasEmp"
            item-value="id"
            item-text="nombre"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="4" class="py-0">
          <v-text-field
            hide-details
            single-line
            v-model="searchValue"
            v-on:keyup.enter="buscarEmpleado()"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="1" class="py-0">
          <v-btn depressed color="primary" :loading="loading" @click="buscarEmpleado()">
            Buscar Empleado
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-card>
      <v-card-title> Empleados: </v-card-title>
      <v-card-text class="pb-0">
        <v-data-table
          :headers="headers"
          :items="items"
          :loading="loading"
          loading-text="Consultando empleados..."
          class="elevation-1"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn color="primary" fab x-small dark @click="addDiagnostic(item)">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <template v-slot:item.cargos="{ item }">
            <ul v-if="item.cargos.length > 0">
              <li v-for="(cargo, i) in item.cargos" :key="i">
                {{ cargo.Cargo }}
              </li>
            </ul>
          </template> </v-data-table
        ><v-row>
          <v-col cols="4" sm="3">
            <v-select
              v-model="pageSize"
              :items="pageSizes"
              label="Items per Page"
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
            ></v-pagination>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    totalPages: 0,
    loading: false,
    pageSize: 9,
    pageSizes: [3, 6, 9],
    items: [],
    headers: [],
    tipBusSelecEmp: "ApeNom",
    tiposBusquedasEmp: [],
    searchValue: null,
  }),
  watch: {
    showModal(val) {
      if (val == true) {
        this.search();
      }
    },
  },
  mounted() {
    this.headers = [
      {
        text: "Id",
        align: "start",
        sortable: false,
        value: "IdEmpleado",
      },
      { text: "Apellidos y Nombres", value: "ApellidosNombres" },
      { text: "DNI", value: "DNI" },
      { text: "Condicion", value: "CondicionTrabajo" },
      { text: "Tipo Emp.", value: "TipoEmpleado" },
      { text: "Fecha Ingreso", value: "FechaIngreso" },
      { text: "Cargos", value: "cargos" },
      { text: "", value: "actions", sortable: false },
    ];
    this.tiposBusquedasEmp = [
      { id: "CodigoPlanilla", nombre: "Codigo Planilla" },
      { id: "DNI", nombre: "DNI" },
      { id: "ApeNom", nombre: "Apell. y Nomb." },
      { id: "IdEmpleado", nombre: "Id de Empleado" },
    ];
    this.loadItems();
  },
  methods: {
    initialForm() {
      this.page = 1;
      this.totalPages = 0;
      this.items = [];
    },
    handlePageChange(value) {
      this.page = value;
      this.loadItems();
    },
    handlePageSizeChange(size) {
      this.pageSize = size;
      this.page = 1;
      this.loadItems();
    },
    swalMessage(message, title = "Advertencia!", icon = "warning") {
      Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: "Ok",
      });
    },
    loadItems() {
      this.loading = true;
      axios
        .post(`/api/mantenimiento/empleados/listar`, {
          page: this.page,
          pagesize: this.pageSize,
        })
        .then(({ data }) => {
          if (data.message === "OK") {
            this.items = data.respuesta.data;
            this.totalPages = data.respuesta.last_page;
          } else {
            this.swalMessage(data.message);
          }
          this.loading = false;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
            }
          } else if (error.request) {
            // console.log(error.request);
          } else {
            // console.log("Error", error.message);
          }
          // console.log(error.config);
        });
    },
    buscarEmpleado() {
      this.loading = true;
      axios
        .post(`/api/mantenimiento/empleados/buscar`, {
          tipo: this.tipBusSelecEmp,
          parametro: this.searchValue,
          page: this.page,
          pagesize: this.pageSize,
        })
        .then(({ data }) => {
          console.log(data);
          if (data.message === "OK") {
            this.items = data.respuesta.data;
            this.totalPages = data.respuesta.last_page;
          } else {
            this.swalMessage(data.message);
          }
          this.loading = false;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
            }
          } else if (error.request) {
            // console.log(error.request);
          } else {
            // console.log("Error", error.message);
          }
          // console.log(error.config);
        });
    },
    downloadInformePaciente(item) {
      window.open(
        `/laboratorio/orden/resultado/exportar/${item.IdOrdenLaboratorio}`,
        "_blank"
      );
    },
  },
};
</script>

<style></style>
