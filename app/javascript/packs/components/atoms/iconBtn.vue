<template>
  <v-btn icon :disabled="disabled">
    <v-icon color="grey lighten-1" @click="onclick"><slot></slot></v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ["disabled"],
  methods: {
    onclick() {
      this.$emit("click");
    }
  }
};
</script>

<style></style>
