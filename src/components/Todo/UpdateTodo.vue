<template>
  <loading v-if="loading" />
  <div class="container">
    <div class="inputs">
      <label for="title">
        Title
        <input type="text" id="title" v-model="todo.title" />
      </label>
      <label for="content">
        Content
        <input type="text" id="content" v-model="todo.content" />
      </label>
      <label for="isDone">
        <input type="checkbox" id="isDone" v-model="todo.isDone" />
        Is Done?
      </label>
    </div>
    <div class="buttons">
      <button class="submit" @click="submitForm">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateTodo",
  data() {
    return {
      todo: {
        title: "",
        content: "",
        isDone: false,
      },
      loading: false,
    };
  },
  mounted() {
    this.getTodo();
  },
  methods: {
    async getTodo() {
      this.loading = true;
      const { id } = this.$route.params;
      const response = await fetch(`http://localhost:5001/todos/${id}`);
      const result = await response.json();
      this.todo = result;
      this.loading = false;
    },
    async submitForm() {
      const data = {
        ...this.todo,
        createdDate: new Date(),
      };
      if (data.title !== "" && data.content !== "") {
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
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

label {
  user-select: none;
}
.inputs {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.buttons .submit {
  background: #6528f7;
  color: #ede4ff;
}
.buttons .clear {
  background: #f3ccff;
  color: #a555ec;
}
</style>
