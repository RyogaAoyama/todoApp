<template>
  <v-card v-show="hidden">
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
            <icon-btn
              @click="regist(todo)"
              :disabled="todo.name.length < 1"
            >mdi-check-circle-outline</icon-btn>
            <icon-btn @click="cansel(todo.id)">mdi-close-circle-outline</icon-btn>
          </div>
          <div v-else>
            <v-menu>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-information</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-subheader>メニュー</v-subheader>
                <v-list-item @click="edit(todo.id)">
                  <v-list-item-icon>
                    <v-icon>mdi-pen</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>タスクを編集</v-list-item-content>
                </v-list-item>

                <v-list-item @click="destroy(todo.id)">
                  <v-list-item-icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>タスクを削除</v-list-item-content>
                </v-list-item>
                <v-divider inset="inset"></v-divider>
              </v-list>
            </v-menu>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import iconBtn from "../atoms/iconBtn.vue";
import { RepositoryFactory } from "../../factories/repositoryFactory.js";

const TodosRepository = RepositoryFactory.get("todos");
export default {
  props: ["todos"],
  computed: {
    hidden: function() {
      return this.todos.length > 0;
    }
  },
  components: {
    "icon-btn": iconBtn
  },

  methods: {
    async done(todo) {
      // 更新内容の保存
      this.$store.dispatch("done", todo);
    },
    async create(todo) {
      this.$store.dispatch("create", todo);
    },
    cansel(key) {
      if (key == -1) {
        this.todos.pop();
      } else {
        let name = sessionStorage.getItem("name");
        this.todos.forEach((todo, idx) => {
          if (todo.id == key) {
            this.$set(this.todos[idx], "name", name);
            this.$set(this.todos[idx], "isEdit", false);
            sessionStorage.removeItem("name");
          }
        });
      }
    },
    edit(key) {
      this.todos.forEach((todo, idx) => {
        if (todo.id == key) {
          this.$set(this.todos[idx], "isEdit", true);
          sessionStorage.setItem("name", this.todos[idx].name);
        } else {
          this.$set(this.todos[idx], "isEdit", false);
        }
      });
    },
    destroy(key) {
      this.$store.dispatch("todoDestroy", key);
    },
    regist(todo) {
      if (todo.id == -1) {
        this.create(todo);
      } else {
        this.update(todo);
      }
    },
    async update(todo) {
      this.$store.dispatch("todoUpdate", todo);
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
