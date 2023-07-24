import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import UpdateTodo from "./components/Todo/UpdateTodo.vue";
import TodoList from "./components/Todo/TodoList.vue";
import Loading from "./components/Shared/Loading.vue";

const routes = [
  { path: "/", component: TodoList },
  {
    path: "/:id",
    component: UpdateTodo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.component("Loading", Loading);

app.mount("#app");
