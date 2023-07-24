<template>
  <loading v-if="loading" />
  <div class="todo" :class="{ done: todo.isDone }">
    <div class="todo-title">{{ todo.title }}</div>
    <div class="todo-date">
      {{ createdDate }}
    </div>
    <div class="todo-content">{{ todo.content }}</div>
    <div class="todo-isdone" v-on:click="updateIsDone">
      {{ todo.isDone ? "Done" : "Not Done" }}
    </div>
    <div class="todo-buttons">
      <router-link :to="`/${todo.id}`" class="edit">Edit</router-link>
      <span @click="deleteTodo">X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      loading: false,
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    getTodos: {
      type: Function,
    },
  },
  computed: {
    createdDate() {
      return this.todo.createdDate.toLocaleString();
    },
  },
  methods: {
    async updateIsDone() {
      this.loading = true;
      const data = {
        ...this.todo,
        isDone: !this.todo.isDone,
      };
      const response = await fetch(
        `http://localhost:5001/todos/${this.todo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      this.loading = false;
      this.getTodos();
    },
    async deleteTodo() {
      this.loading = true;
      await fetch(`http://localhost:5001/todos/${this.todo.id}`, {
        method: "DELETE",
      });
      this.loading = false;
      this.getTodos();
    },
  },
};
</script>

<style>
.todo {
  background: #461959;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
}

.todo-date {
  font-size: 0.8rem;
  text-align: right;
}

.todo.done {
  background: mediumseagreen;
  color: white;
  text-decoration: line-through;
}

.todo .todo-title {
  font-size: 1.4rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: underline;
}

.todo-isdone {
  cursor: pointer;
}

.todo-isdone:hover {
  color: coral;
}

.todo-buttons {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
}

.todo-buttons span:hover {
  color: coral;
  user-select: none;
}

.todo-buttons .edit {
  padding: 0.1rem 0.5rem;
}

.todo-buttons .edit:hover {
  border: 1px solid coral;
}
</style>
