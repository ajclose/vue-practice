<template lang="html">
  <div class="card pending-task">
    <div class="card-block">
      <h4>{{ todo.task }}</h4>
    </div>
    <div class="card-footer">
      <clr-icon class="check" shape="check" size="24" @click="markCompleted()"></clr-icon>
      <clr-icon class="delete" shape="times" size="24" @click="deleteTask()"></clr-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'todo'
  ],
  methods: {
    markCompleted () {
      this.$store.dispatch('setTaskComplete', this.todo)
    },
    deleteTask () {
      if (confirm('Are you sure you want to delete this task?')) {
        this.$store.dispatch('deleteTask', this.todo)
      }
    }
  }
}
</script>

<style lang="css">
  .check {
    color: #48960C;
  }

  .check:hover {
    color: #60B515;
    cursor: pointer;
  }

  .delete {
    color: #EE4A08;
  }

  .delete:hover {
    color: #FF8142;
    cursor: pointer;
  }

  clr-icon {
    margin: 0 20px;
  }
</style>
