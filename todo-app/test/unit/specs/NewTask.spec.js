import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'clone-deep'
import sinonChai from 'sinon-chai'
import NewTask from '../../../src/components/NewTask.vue'
import { state, mutations, actions, getters } from '../../../src/store/store'

Vue.use(Vuex)

describe('NewTask', () => {
  let vm
  let store
  beforeEach(function () {
    store = new Vuex.Store({
      state: cloneDeep(state),
      mutations: cloneDeep(mutations),
      actions: cloneDeep(actions),
      getters: cloneDeep(getters)
    })
    const Constructor = Vue.extend(NewTask)
    vm = new Constructor({store}).$mount()
  })
  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('newTask')
  })
  it('should render a text input and a button', () => {
    expect(vm.$el.querySelector('button').textContent).to.equal('Add Task')
    expect(vm.$el.querySelector('input[type=text]').placeholder).to.equal('Enter Task')
  })
  it('should not add a blank task', () => {
    vm.addTask()
    expect(vm.$store.state.todos.length).to.equal(4)
  })
  it('should add a new task to state', () => {
    vm.$data.newTask = 'new task'
    vm.addTask()
    expect(vm.$store.state.todos.length).to.equal(5)
    expect(vm.$data.newTask).to.equal('')
  })
  it('should emit addTask event when button is clicked', () => {
    const spy = sinon.spy(vm, 'addTask')
    const addTaskButton = vm.$el.querySelector('button')
    addTaskButton.click()
    expect(spy).to.have.been.calledOnce
  })
})
