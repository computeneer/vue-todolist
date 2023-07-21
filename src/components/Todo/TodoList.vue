<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div class="todo-list">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  data() {
    return {
      title: "Todo List",
      todos: [],
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      // axios gibi kütüphaneler ile de istek atılabilir.

      fetch("http://localhost:5001/todos")
        .then((res) => res.json())
        .then((res) => {
          this.todos = res;
        });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #cd6688;
  padding: 1.5rem;
  border-radius: 5px;
}

.todo {
  background: #461959;
  padding: 1rem;
  border-radius: 5px;
}

.todo.done {
  background: #aed8cc;
  color: black;
  text-decoration: line-through;
}

.todo .todo-title {
  font-size: 1.4rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: underline;
}
</style>
