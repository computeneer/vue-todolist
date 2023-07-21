<template>
  <div class="todo" :class="{ done: todo.isDone }">
    <div class="todo-title">{{ todo.title }}</div>
    <div class="todo-content">{{ todo.content }}</div>
    <div class="todo-isdone">{{ todo.isDone ? "Done" : "Not Done" }}</div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
