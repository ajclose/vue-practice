import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'clone-deep'
import sinonChai from 'sinon-chai'
import PendingTask from '../../../src/components/PendingTask.vue'
import { state, mutations, actions, getters } from '../../../src/store/store'

Vue.use(Vuex)

describe('PendingTask', () => {
  let vm
  let store
  let confirmStub
  beforeEach(function () {
    store = new Vuex.Store({
      state: cloneDeep(state),
      mutations: cloneDeep(mutations),
      actions: cloneDeep(actions),
      getters: cloneDeep(getters)
    })
    const Constructor = Vue.extend(PendingTask)
    vm = new Constructor({store, propsData: {todo: store.state.todos[1]}}).$mount()
    confirmStub = sinon.stub(window, 'confirm')
  })
  afterEach(function () {
    confirmStub.restore()
  })
  it('should display the correct content', () => {
    expect(vm.$el.querySelector('.pending-task h4').textContent).to.equal(vm.$store.state.todos[1].task)
  })
  it('should mark task as completed', () => {
    vm.markCompleted()
    expect(vm.$store.state.todos[1].completed).to.equal(true)
  })
  it('should not delete task if user does not confirm', () => {
    confirmStub.returns(false)
    vm.deleteTask()
    expect(vm.$store.state.todos.length).to.equal(4)
  })
  it('should delete task if user confirms', () => {
    confirmStub.returns(true)
    vm.deleteTask()
    expect(vm.$store.state.todos.length).to.equal(3)
  })
  it('should emit deleteTask event when x is clicked', () => {
    const spy = sinon.spy(vm, 'deleteTask')
    const deleteButton = vm.$el.querySelector('.delete')
    deleteButton.click()
    expect(spy).to.have.been.calledOnce
  })
  it('should emit markCompleted event when undo is clicked', () => {
    const spy = sinon.spy(vm, 'markCompleted')
    const markCompletedButton = vm.$el.querySelector('.check')
    markCompletedButton.click()
    expect(spy).to.have.been.calledOnce
  })
})
