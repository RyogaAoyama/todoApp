import Vue from "vue";
import Vuex from "vuex";
import { RepositoryFactory } from "./factories/repositoryFactory.js";

Vue.use(Vuex);

const TodosRepository = RepositoryFactory.get("todos");
export default new Vuex.Store({
  state: {
    todos: [],
    addBtn: true
  },
  mutations: {
    done(state, payload) {
      state.todos.forEach((todo, idx) => {
        if (payload.id == todo.id) {
          state.todos[idx] = todo;
        }
      });
    },
    getAllTodo(state, payload) {
      for (let data of payload) {
        data.isEdit = false;
        state.todos.push(data);
      }
    },
    todoAdd(state) {
      const NewTodo = { name: "", is_done: false, isEdit: true, id: -1 };
      state.todos.push(NewTodo);
    },
    addBtnShowHide(state) {
      for (let todo of state.todos) {
        if (todo.isEdit) {
          state.addBtn = false;
        }
      }
      state.addBtn = true;
    },
    create(state, payload) {
      state.todos[state.todos.length - 1]["id"] = payload.id;
      state.todos[state.todos.length - 1]["isEdit"] = false;
    },
    todoDestroy(state, payload) {
      state.todos.forEach((todo, idx) => {
        if (todo.id == payload) {
          state.todos.splice(idx, 1);
        }
      });
    },
    todoUpdate(state, payload) {
      state.todos.forEach((value, idx) => {
        if (value.id == payload.id) {
          state.todos[idx]["isEdit"] = false;
        }
      });
    }
  },

  actions: {
    async done(context, payload) {
      console.log(context.state);
      // 更新内容の保存
      await TodosRepository.update(payload.id, payload)
        .then(response => {
          let todo = response.data;
          context.commit("done", todo);
        })
        .catch(e => {
          alert(e);
        });
    },
    async getAllTodo(context) {
      await TodosRepository.all()
        .then(response => {
          context.commit("getAllTodo", response.data.todos);
        })
        .catch(e => {
          alert(e);
        });
    },
    async create(context, payload) {
      await TodosRepository.create(payload)
        .then(response => {
          context.commit("create", response.data.todo);
        })
        .catch(e => {
          alert(e);
        });
    },
    todoDestroy(context, payload) {
      TodosRepository.destroy(payload)
        .then(response => {
          context.commit("todoDestroy", payload);
        })
        .catch(e => {
          alert(e);
        });
    },
    async todoUpdate(context, payload) {
      await TodosRepository.update(payload.id, payload)
        .then(response => {
          context.commit("todoUpdate", payload);
        })
        .catch(e => {
          alert(e);
        });
    },
    todoAdd(context) {
      context.commit("todoAdd");
    },
    addBtnShowHide(context) {
      context.commit("addBtnShowHide");
    }
  }
});
