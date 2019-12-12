import VueRouter from "vue-router";
import Vue from "vue";
import TodoIndex from "./components/pages/todo/index.vue";

Vue.use(VueRouter);

const routes = [{ path: "/", component: TodoIndex }];

export default new VueRouter({
  mode: "history",
  routes
});
