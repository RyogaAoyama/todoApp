<template>
  <div id="app">
    <m-header>ToDoApp</m-header>
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import Header from "./packs/components/molecules/header.vue";
export default {
  components: {
    "m-header": Header
  }
};
</script>
