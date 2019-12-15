<template>
  <v-app>
    <h2 class="mb-5">ToDo</h2>
    <todo-num :todos="todos"></todo-num>
    <todo-list :todos="todos"></todo-list>

    <add-btn @add="todoAdd" v-show="addBtnHidden"></add-btn>
  </v-app>
</template>

<script>
import todoList from "../../molecules/todoList.vue";
import addBtn from "../../atoms/addBtn.vue";
import todoNum from "../../atoms/todoNum.vue";
export default {
  components: {
    "todo-list": todoList,
    "add-btn": addBtn,
    "todo-num": todoNum
  },
  data: () => {
    return {
      todos: [],
      editTodoId: -1
    };
  },
  computed: {
    addBtnHidden: function() {
      for (let todo of this.todos) {
        if (todo.isEdit) {
          return false;
        }
      }
      return true;
    }
  },
  async created() {
    await this.get();
  },
  methods: {
    async get() {
      // TODO: そのうち環境変数に使用
      const APP_URL = "http://localhost:3000";
      await this.$axios.get(APP_URL + "/api/todos").then(response => {
        for (let data of response.data.todos) {
          data.isEdit = false;
          this.todos.push(data);
        }
      });
    },
    todoAdd: function() {
      let newTodo = { name: "", is_done: false, isEdit: true, id: -1 };
      this.todos.push(newTodo);
    }
  }
};
</script>
