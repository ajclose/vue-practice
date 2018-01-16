<template lang="html">
  <div class="new-task">
    <input type="text" name="" value="" placeholder="Enter Task" v-model="newTask">
    <div class="">
      <button name="addTask" class="btn btn-primary" @click="addTask()">Add Task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newTask',
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (!this.newTask) {
        alert('Please enter a task!')
      } else {
        this.$store.dispatch('addTask', this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
