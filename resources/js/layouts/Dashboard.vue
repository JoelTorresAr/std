<template>
  <v-app dark>
    <navegation-drawer-left
      :drawer.sync="drawer"
      :clipped.sync="clipped"
      :miniVariant.sync="miniVariant"
      :noAction.sync="noAction"
    ></navegation-drawer-left>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-2" v-bind="attrs" v-on="on" text>
              <v-icon left dark>mdi-account-circle-outline</v-icon>{{ title }}
              <v-icon right dark>
                mdi-arrow-down-drop-circle-outline
              </v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item @click="showPassForm = true">
              <v-list-item-action>
                <v-icon light>mdi-shield-lock-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>Cambiar contraseña</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-action>
                <v-icon light>mdi-power-standby</v-icon>
              </v-list-item-action>
              <v-list-item-title>Cerrar sesión</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-title>
      <v-spacer />
      <v-chip
        class="ma-2"
        color="green accent-4"
        outlined
        v-if="VueEnv === 'development' ? true : false"
      >
        <v-icon left> mdi-wrench</v-icon>
        Desarrollador VUE
      </v-chip>
      <v-chip
        class="ma-2"
        color="red darken-4"
        outlined
        v-if="LaravelEnv === 'local' ? true : false"
      >
        <v-icon left> mdi-wrench</v-icon>
        Desarrollador LARAVEL
      </v-chip>
      <v-btn
        @click="update"
        fab
        dark
        outlined
        title="Actualizar"
        small
        color="primary"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <div class="mx-2">
        <transition mode="out-in">
          <router-view />
        </transition>
      </div>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
                         <span>&copy; {{ new Date().getFullYear() }}</span>
                        </v-footer> -->
  </v-app>
</template>

<script>
import navegationDrawerLeft from "./NavegationDraweLeft.vue";
export default {
  components: {
    navegationDrawerLeft,
  },
  props: ["user"],
  data() {
    return {
      clipped: false,
      returnPassForm: false,
      showReports: false,
      showPassForm: false,
      VueEnv: "development",
      LaravelEnv: "local",
      drawer: false,
      fixed: false,
      noAction: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "JOEL TORRES FARRO",
      ReportGroups: [
        {
          icon: "mdi-file-pdf",
          clave: "ARCHIVO CLINICO",
          title: "Arch.Clin.",
          color: "red darken-4",
          items: [
            {
              icon: "mdi-file-pdf",
              title: "Citas Solicitadas",
              to: { name: "report-hc-solicitudes" },
              clave: "ID_HCSOLICPORSERV",
              color: "",
            },
          ],
        },
        {
          icon: "mdi-file-pdf",
          clave: "LABORATORIO",
          title: "Laboratorio",
          color: "",
          items: [
            {
              icon: "mdi-file-pdf",
              title: "Resultados por Servicios",
              to: { name: "laboratorio.reportes.grupo.pruebas" },
              clave: "ID_LabTipoAnalisisResultados",
              color: "",
            },
            {
              icon: "mdi-file-pdf",
              title: "Producion por Área",
              to: { name: "laboratorio.reportes.produccion.area" },
              clave: "ID_LabProduccion",
              color: "",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    /*this.$store.commit("SET_ADD_NOTIFICATION", {
          cant: 8,
          message: "Tienes ordenes pendientes",
        });*/
    const userEx = this.$store.getters.GET_USER;
    this.title = `${userEx.name} ${userEx.apellido_paterno} ${userEx.apellido_materno}`;
    this.title = this.title.toUpperCase();
    this.VueEnv = this.$store.getters.GET_ENV_VUE;
    this.LaravelEnv = this.$store.getters.GET_ENV_LARAVEL;
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
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
