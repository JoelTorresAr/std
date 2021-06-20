<template>
  <v-app id="inspire">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: ["user", "items", "groups", "cargos", "specials", "reportes", "env"],
  data: () => ({
    //
  }),
  mounted() {
    this.$store.commit("SET_USER", this.user);
    this.$store.commit("SET_CARGOS", this.cargos);
    this.$store.commit("SET_ITEMS", this.items);
    this.$store.commit("SET_GROUPS", this.groups);
    this.$store.commit("SET_SPECIAL_PERMISSIONS", this.specials);
    this.$store.commit("SET_REPORT_PERMISSIONS", this.reportes);
    this.$store.commit("SET_ENV_LARAVEL", this.env);
    this.$store.dispatch("DISPATCH_LOGS");/*
    var a = performance.now();
    var result = [1, 2, 3, 4, 5, 6, 7, 8].divides();
    var b = performance.now();
    console.log("It took " + (b - a) + " ms.");*/
  },
};
</script>
