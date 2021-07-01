<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title class="justify-center black white--text"
        >MESA DE PARTES VIRTUALES</v-card-title
      >
      <v-card-text>
        <v-row justify="center" no-gutters>
          <v-col cols="6" class="mx-2">
            <v-alert
              border="left"
              colored-border
              color="deep-purple accent-4"
              elevation="2"
            >
              <b>La Municipalidad Distrital de San José de Lourdes </b> pone a
              disposición a las entidades del Estado, los servidores públicos y
              la ciudadanía en general, la <b>MESA DE PARTES VIRTUAL </b> a fin
              de facilitar los trámites administrativos con la entidad.
              <v-row justify="space-around">
                <v-col cols="auto">
                  <button>
                    <v-card class="rounded-0">
                      <v-img
                        style="width: 90px !important; heigth: 150px"
                        src="/img/natural.png"
                        v-on:click="openParte('NATURAL')"
                      >
                      </v-img>
                    </v-card>
                  </button>
                </v-col>
                <v-col cols="auto">
                  <button>
                    <v-card class="rounded-0">
                      <v-img
                        style="width: 90px !important; heigth: 150px"
                        src="/img/juridica.png"
                        v-on:click="openParte('JURIDICA')"
                      >
                      </v-img>
                    </v-card>
                  </button>
                </v-col>
              </v-row>
            </v-alert>
          </v-col>
          <v-col cols="3" class="blue mx-2"> prueba </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
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
