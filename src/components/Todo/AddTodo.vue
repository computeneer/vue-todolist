<template>
  <div class="container">
    <div class="inputs">
      <label for="title">
        Title
        <input type="text" id="title" v-model="todo.baslik" />
      </label>
      <label for="content">
        Content
        <input type="text" id="content" v-model="todo.icerik" />
      </label>
      <label for="isDone">
        <input type="checkbox" id="isDone" v-model="todo.yapildiMi" />
        Is Done?
      </label>
    </div>
    <div class="buttons">
      <button class="clear" @click="clearForm">Clear</button>
      <button class="submit" @click="submitForm">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      todo: {
        baslik: "",
        icerik: "",
        yapildiMi: false,
      },
    };
  },
  methods: {
    clearForm() {
      this.todo = {
        baslik: "",
        icerik: "",
        yapildiMi: false,
      };
    },
    submitForm() {
      const data = {
        title: this.todo.baslik,
        content: this.todo.icerik,
        isDone: this.todo.yapildiMi,
      };
      fetch("http://localhost:5001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(res);
      });
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
