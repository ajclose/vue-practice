<template>
  <div id="app">
    <div class="container">
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
export default {
  name: 'app',
  components: {
    'todo-list': TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
