<template>
  <v-navigation-drawer
    v-model="drawerLeft"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
      <v-list-group
        v-for="(grupo, i) in grupos"
        :key="i"
        :value="false"
        :prepend-icon="grupo.icon"
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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {groupsLeft} from './config/groups';
export default {
  props: ["drawer", "miniVariant", "clipped", "noAction"],
  data: () => ({
    grupos: [],
  }),
  computed: {
    drawerLeft: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.$emit("update:drawer", val);
      },
    },
  },
  created() {
      this.grupos = groupsLeft;
  },
};
</script>

<style>
</style>
