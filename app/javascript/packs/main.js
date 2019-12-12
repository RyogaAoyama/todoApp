import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import Vuetify from "vuetify";
import App from "../app.vue";
import router from "./router";

Vue.use(Vuetify, {});
const vuetify = new Vuetify({
  icon: {
    iconfont: "mdi"
  }
});

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
});
