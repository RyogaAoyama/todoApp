<template>
  <v-card>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item v-for="todo in todos" :key="todo.id">
          <v-list-item-action v-if="todo.isEdit">
            <v-icon>mdi-border-color</v-icon>
          </v-list-item-action>
          <v-list-item-action v-else>
            <v-checkbox
              v-model="todo.is_done"
              @change="done(todo)"
              :class="{ visibility: todo.isEdit }"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content :class="{ done: todo.is_done }">
            <input
              type="text"
              v-model="todo.name"
              :id="`todo-name-${todo.id}`"
              :disabled="!todo.isEdit"
            />
          </v-list-item-content>
          <div v-if="todo.isEdit">
            <icon-btn @click="create(todo)" :disabled="todo.name.length < 1"
              >mdi-check-circle-outline</icon-btn
            >
            <icon-btn @click="cansel">mdi-close-circle-outline</icon-btn>
          </div>
          <div v-else>
            <icon-btn>mdi-information</icon-btn>
          </div>
        </v-list-item>
        <v-divider inset="inset"></v-divider>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import iconBtn from "../atoms/iconBtn.vue";
export default {
  components: {
    "icon-btn": iconBtn
  },
  data: () => {
    return { inset: true };
  },
  props: ["todos"],
  methods: {
    async done(todo) {
      // 更新内容の保存
      // TODO: そのうち環境変数に使用
      const APP_URL = "http://localhost:3000";
      await this.$axios
        .put(APP_URL + "/api/todos/" + todo.id, {
          todo
        })
        .catch(e => {
          alert(e);
        });
    },
    async create(todo) {
      const APP_URL = "http://localhost:3000";
      await this.$axios
        .post(APP_URL + "/api/todos", todo)
        .then(response => {
          console.log(response);
          this.$set(
            this.todos[this.todos.length - 1],
            "id",
            response.data.todo.id
          );
          this.$set(this.todos[this.todos.length - 1], "isEdit", false);
        })
        .catch(e => {
          alert(e);
        });
    },
    cansel() {
      this.todos.pop();
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
  opacity: 0.5;
}
input {
  outline: none;
}

.visibility {
  visibility: hidden;
}
</style>
