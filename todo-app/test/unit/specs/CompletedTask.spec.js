import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'clone-deep'
import sinonChai from 'sinon-chai'
import CompletedTask from '../../../src/components/CompletedTask.vue'
import { state, mutations, actions, getters } from '../../../src/store/store'
import { parseDate } from '../../../src/shared'

Vue.use(Vuex)

describe('CompletedTask', () => {
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
    const Constructor = Vue.extend(CompletedTask)
    vm = new Constructor({store, propsData: {todo: store.state.todos[0]}}).$mount()
    confirmStub = sinon.stub(window, 'confirm')
  })
  afterEach(function () {
    confirmStub.restore()
  })
  it('should display the correct content', () => {
    expect(vm.$el.querySelector('.completed-task h4').textContent).to.equal(vm.$store.state.todos[0].task)
    expect(vm.$el.querySelector('.completed-task h4:nth-child(2)').textContent).to.equal(`Completed: ${parseDate(vm.$store.state.todos[0].dateCompleted)}`)
  })
  it('should mark task as incomplete', () => {
    vm.undoComplete()
    expect(vm.$store.state.todos[0].completed).to.equal(false)
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
  it('should emit undoComplete event when undo is clicked', () => {
    const spy = sinon.spy(vm, 'undoComplete')
    const undoButton = vm.$el.querySelector('.undo')
    undoButton.click()
    expect(spy).to.have.been.calledOnce
  })
})
