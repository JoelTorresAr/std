<template>
  <!--<v-menu bottom left open-on-hover>-->
  <v-menu bottom left open-on-hover>
    <template v-slot:activator="{ on, attrs }">
      <v-badge
        :color="numberNotifications === 0 ? 'primary' : 'error'"
        :content="numberNotifications"
        :value="numberNotifications"
        left
        class="mx-3"
      >
        <v-icon
          :color="numberNotifications === 0 ? 'primary' : 'error'"
          v-bind="attrs"
          v-on="on"
        >
          mdi-bell-outline
        </v-icon>
      </v-badge>
    </template>
    <v-list class="overflow-y-auto my-0 py-0" max-height="400">
      <v-list-item v-if="!tieneNotificaciones" class="sin-notificaciones">
        <v-list-item-title
          >No tiene notificaciónes</v-list-item-title
        >
      </v-list-item>
      <v-list-item v-for="(notification, i) in notifications" :key="i" :class="notification.class" @click="dispachEvent(notification)">
        <v-list-item-subtitle>{{ notification.message }}</v-list-item-subtitle>
      </v-list-item>
      <v-divider v-if="tieneNotificaciones" class="my-0 py-0" ></v-divider>
      <v-list-item v-if="tieneNotificaciones" @click="clearNotifications()">
        <v-list-item-subtitle>Limpiar Notificaciones</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  computed: {
    notifications: {
      get() {
        return this.$store.getters.GET_NOTIFICATIONS;
      }
    },
    numberNotifications: {
      get() {
        let _items = this.$store.getters.GET_NOTIFICATIONS;
        return _items.length;
      },
    },
    tieneNotificaciones: {
      get() {
        let _items = this.$store.getters.GET_NOTIFICATIONS;
        if (_items.length === 0) {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  created(){
  },
  methods: {
    clearNotifications() {
      this.$store.dispatch("CLEAR_NOTIFICATIONS");
    },
    dispachEvent(notification) {
      this.$store.dispatch("DISPATCH_EVENT",notification);
    },
  },
};
</script>
<style scoped>
.sin-notificaciones{
   background-image: linear-gradient(to right, #00b09b, #96c93d)!important;
}
.ordenes-pendientes{
   background-image: radial-gradient(circle, rgba(251,173,63,1) 0%, rgba(252,70,70,1) 100%)!important;
   color: white!important;
   font-weight: bold;
}
</style>
