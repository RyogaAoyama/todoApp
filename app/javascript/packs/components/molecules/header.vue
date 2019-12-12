<template>
  <v-app-bar color="#2699FB" dark>
    <v-toolbar-title>
      <slot></slot>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
export default {
  vuetify: new Vuetify()
};
</script>
