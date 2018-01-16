<template lang="html">
  <div class="card completed-task">
    <div class="card-block">
      <h4>{{ todo.task }}</h4>
      <h4>Completed: {{ parseDate(todo.dateCompleted) }}</h4>
    </div>
    <div class="card-footer">
      <clr-icon class="undo" shape="undo" size="24" @click="undoComplete()"></clr-icon>
      <clr-icon class="delete" shape="times" size="24" @click="deleteTask()"></clr-icon>
    </div>
  </div>
</template>

<script>
import { parseDate } from '../shared'
export default {
  props: ['todo'],
  methods: {
    parseDate,
    deleteTask () {
      if (confirm('Are you sure you want to delete this task?')) {
        this.$store.dispatch('deleteTask', this.todo)
      }
    },
    undoComplete () {
      this.$store.dispatch('undoComplete', this.todo)
    }
  }
}
</script>

<style lang="css">
  .undo {
    color: #0065AB;
  }

  .undo:hover {
    color: #49AFD9;
    cursor: pointer;
  }
</style>
