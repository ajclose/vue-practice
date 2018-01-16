import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  id: 4,
  todos: [
    {
      id: 1,
      task: 'Learn Vue',
      completed: true,
      dateCompleted: new Date('January 15, 2018')
    },
    {
      id: 2,
      task: 'Make app',
      completed: false,
      dateCompleted: ''
    },
    {
      id: 3,
      task: 'Write tests',
      completed: false,
      dateCompleted: ''
    },
    {
      id: 4,
      task: 'Eat tacos',
      completed: true,
      dateCompleted: new Date('January 15, 2018')
    }
  ]
}

export const mutations = {
  'SET_TASK_COMPLETE' (state, task) {
    const index = state.todos.findIndex(element => element.id === task.id)
    state.todos[index].completed = true
    state.todos[index].dateCompleted = Date.now()
  },
  'DELETE_TASK' (state, task) {
    const index = state.todos.findIndex(element => element.id === task.id)
    state.todos.splice(index, 1)
  },
  'UNDO_COMPLETE' (state, task) {
    const index = state.todos.findIndex(element => element.id === task.id)
    state.todos[index].completed = false
    state.todos[index].dateCompleted = ''
  },
  'ADD_TASK' (state, task) {
    state.id += 1
    const newTask = {
      id: state.id,
      task: task,
      completed: false,
      dateCompleted: ''
    }
    state.todos.push(newTask)
  }
}

export const actions = {
  setTaskComplete ({commit}, task) {
    commit('SET_TASK_COMPLETE', task)
  },
  deleteTask ({commit}, task) {
    commit('DELETE_TASK', task)
  },
  undoComplete ({commit}, task) {
    commit('UNDO_COMPLETE', task)
  },
  addTask ({commit}, task) {
    commit('ADD_TASK', task)
  }
}

export const getters = {
  completedTasks: state => {
    return state.todos.filter(todo => todo.completed === true)
  },
  pendingTasks: state => {
    return state.todos.filter(todo => todo.completed === false)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
