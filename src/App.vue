<template>
  <AddTodo />
  <TodoList />
</template>

<script>
import TodoList from "./components/Todo/TodoList.vue";
import AddTodo from "./components/Todo/AddTodo.vue";
export default {
  components: {
    TodoList,
    AddTodo,
  },
};
</script>

<style scoped></style>
