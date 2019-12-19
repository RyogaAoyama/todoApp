<template>
  <v-app>
    <h2 class="mb-5">ToDo</h2>
    <todo-num :todos="todos"></todo-num>
    <todo-list :todos="todos"></todo-list>

    <add-btn @add="todoAdd" v-show="addBtn"></add-btn>
  </v-app>
</template>

<script>
import todoList from "../molecules/todoList.vue";
import addBtn from "../atoms/addBtn.vue";
import todoNum from "../atoms/todoNum.vue";
import { RepositoryFactory } from "../../factories/repositoryFactory.js";
import { mapState } from "vuex";

const TodosRepository = RepositoryFactory.get("todos");
export default {
  components: {
    "todo-list": todoList,
    "add-btn": addBtn,
    "todo-num": todoNum
  },
  data: () => {
    return {
      editTodoId: -1
    };
  },
  computed: {
    ...mapState(["todos", "addBtn"])
  },
  async created() {
    this.$store.dispatch("getAllTodo");
  },
  methods: {
    todoAdd() {
      alert("ss");
      this.$store.dispatch("todoAdd");
    }
  }
};
</script>
