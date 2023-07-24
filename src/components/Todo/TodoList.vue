<template>
  <AddTodo :addTodoToList="addTodoToList" />
  <div class="container" v-if="todos.length > 0">
    <h2 class="title">{{ title }}</h2>
    <div class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :todo="todo"
        :getTodos="getTodos"
        :key="todo.id"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    AddTodo,
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
    addTodoToList(todo) {
      this.todos.push(todo);
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
</style>
