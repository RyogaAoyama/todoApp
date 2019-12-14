<template>
  <div class="bottom-right" @click="onclick">
    <v-btn fab dark large color="primary">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    onclick() {
      this.$emit("add");
    }
  }
};
</script>

<style>
.bottom-right {
  position: fixed;
  bottom: 25px;
  right: 25px;
}
</style>
