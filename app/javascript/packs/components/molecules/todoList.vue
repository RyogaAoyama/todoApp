<!-- TODO: v-forでToDo表示 -->
<template>
  <v-card>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-action>
            <v-checkbox></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>todo</v-list-item-content>
          <v-list-item-action>
            <info-btn></info-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider inset="inset"></v-divider>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import infoBtn from "../atoms/infoBtn.vue";
export default {
  components: {
    "info-btn": infoBtn
  },
  data: () => {
    return { inset: true };
  }
};
</script>

<style></style>
