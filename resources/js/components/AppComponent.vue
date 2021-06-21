<template>
  <v-app id="inspire">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: ["user", "env"],
  data: () => ({
    //
  }),
  mounted() {
    this.$store.commit("SET_USER", this.user);
    this.$store.commit("SET_ENV_LARAVEL", this.env);
  },
};
</script>
