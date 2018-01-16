import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from '../../../src/components/TodoList.vue'
import NewTask from '../../../src/components/NewTask.vue'
import PendingTask from '../../../src/components/PendingTask.vue'
import CompletedTask from '../../../src/components/CompletedTask.vue'
import { state, mutations, actions, getters } from '../../../src/store/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

describe('TodoList', () => {
  let vm
  beforeEach(function () {
    const Constructor = Vue.extend(TodoList)
    vm = new Constructor({store}).$mount()
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('button').textContent).to.equal('Add Task')
    expect(vm.$el.querySelector('.pending h2').textContent).to.equal('Pending')
    expect(vm.$el.querySelector('.completed h2').textContent).to.equal('Completed')
  })
  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('todoList')
  })
  it('should include a newTask component', () => {
    const newTaskComponent = vm.$options.components['new-task']
    expect(newTaskComponent).to.contain(NewTask)
  })
  it('should include a pendingTask component', () => {
    const pendingTaskComponent = vm.$options.components['pending-task']
    expect(pendingTaskComponent).to.contain(PendingTask)
  })
  it('should include a completedTask component', () => {
    const completedTaskComponent = vm.$options.components['completed-task']
    expect(completedTaskComponent).to.contain(CompletedTask)
  })
})
