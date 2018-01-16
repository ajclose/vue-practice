<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <new-task></new-task>
      <div class="pending" v-if="pendingTasks.length > 0">
        <h2>Pending</h2>
        <pending-task v-for="task in pendingTasks" :todo="task" :key="task.id"></pending-task>
      </div>
      <div class="completed" v-if="completedTasks.length > 0">
        <h2>Completed</h2>
        <completed-task v-for="task in completedTasks" :todo="task" :key="task.id"></completed-task>
      </div>
    </div>
  </div>
</template>

<script>
import PendingTask from './PendingTask.vue'
import CompletedTask from './CompletedTask.vue'
import NewTask from './NewTask.vue'
export default {
  name: 'todoList',
  computed: {
    completedTasks () {
      return this.$store.getters.completedTasks
    },
    pendingTasks () {
      return this.$store.getters.pendingTasks
    }
  },
  components: {
    'pending-task': PendingTask,
    'completed-task': CompletedTask,
    'new-task': NewTask
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
