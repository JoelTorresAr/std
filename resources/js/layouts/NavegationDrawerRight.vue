<template>
  <v-navigation-drawer v-model="drawerRight" :right="rightD" temporary fixed>
    <v-list>
      <v-list-group
        v-for="(grupo, i) in grupos"
        :key="i"
        :value="false"
        :prepend-icon="grupo.icon"
        v-if="canReportGroup(grupo.clave)"
        :no-action="noAction"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              <div class="text-wrap" style="width: 6rem">
                {{ grupo.title }}
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(item, j) in grupo.items"
          :key="j"
          :to="item.to"
          router
          exact
          v-if="canReportItem(item.clave)"
          class="ml-3"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <div class="text-wrap" style="width: 6rem">
                {{ item.title }}
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item-group>
        <v-list-item @click.native="rightD = !rightD">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
        <v-list-item @click.native="displayPassForm">
          <v-list-item-action>
            <v-icon light>mdi-shield-lock-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>Cambiar contraseña</v-list-item-title>
        </v-list-item>
        <v-list-item @click.native="logout">
          <v-list-item-action>
            <v-icon light>mdi-power-standby</v-icon>
          </v-list-item-action>
          <v-list-item-title>Cerrar sesión</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["rightDrawer", "right", "showDialog", "noAction"],
  data: () => ({
    grupos: [
      {
        icon: "mdi-file-pdf",
        clave: "ARCHIVO CLINICO",
        title: "Reportes Arch.Clin.",
        items: [
          {
            icon: "mdi-file-pdf",
            title: "Citas Solicitadas",
            to: { name: "report-hc-solicitudes" },
            clave: "ID_HCSOLICPORSERV",
          },
        ],
      },
      {
        icon: "mdi-file-pdf",
        clave: "LABORATORIO",
        title: "Reportes Laboratorio",
        items: [
          {
            icon: "mdi-file-pdf",
            title: "Grupos Examenes",
            to: { name: "laboratorio.reportes.grupo.pruebas" },
            clave: "ID_LabTipoAnalisisResultados",
          },
        ],
      },
    ],
  }),
  computed: {
    drawerRight: {
      get() {
        return this.rightDrawer;
      },
      set(val) {
        this.$emit("update:rightDrawer", val);
      },
    },
    rightD: {
      get() {
        return this.right;
      },
      set(val) {
        this.$emit("update:right", val);
      },
    },
    showPassForm: {
      get() {
        return this.showDialog;
      },
      set(val) {
        this.$emit("update:showDialog", val);
      },
    },
  },
  methods: {
    update() {
      axios
        .get("/cache/clear")
        .then((response) => {})
        .catch((error) => {
          //console.log(error.config);
        })
        .finally(() => {
          window.location.reload(true);
        });
    },
    logout() {
      const crsfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
      window.axios.defaults.headers.common["X-CSRF-TOKEN"] = crsfToken;
      axios
        .post("/logout")
        .then((response) => {
          location.reload(true);
        })
        .catch((error) => {
          console.log(error.config);
        });
    },
    displayPassForm() {
      //this.rightDrawer = false;
      this.showPassForm = true;
    },
  },
};
</script>

<style>
</style>
