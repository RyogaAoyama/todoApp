<template>
  <v-app>
    <h2 class="mb-5">ToDo</h2>
    <todo-num></todo-num>
    <todo-list></todo-list>

    <add-btn></add-btn>
  </v-app>
</template>

<script>
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import todoList from "../../molecules/todoList.vue";
import addBtn from "../../atoms/addBtn.vue";
import todoNum from "../../atoms/todoNum.vue";
export default {
  vuetify: new Vuetify(),
  components: {
    "todo-list": todoList,
    "add-btn": addBtn,
    "todo-num": todoNum
  }
};
</script>
