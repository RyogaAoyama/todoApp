<template>
  <div>
    <small>{{ todoNum }}</small>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  computed: {
    todoNum: function() {
      this.todos.length;
      let done = 0;
      for (let todo of this.todos) {
        if (todo.is_done) {
          done++;
        }
      }
      return `${done}/${this.todos.length}`;
    }
  }
};
</script>

<style></style>
