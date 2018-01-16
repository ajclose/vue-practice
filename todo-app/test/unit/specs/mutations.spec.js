import { expect } from 'chai'
import { mutations, state } from '../../../src/store/store'
import cloneDeep from 'clone-deep'

const { SET_TASK_COMPLETE, DELETE_TASK, UNDO_COMPLETE, ADD_TASK } = mutations
const localState = state

describe('mutations', () => {
  let state
  beforeEach(function () {
    state = cloneDeep(localState)
  })
  it('SET_TASK_COMPLETE', () => {
    SET_TASK_COMPLETE(state, state.todos[1])
    expect(state.todos[1].completed).to.equal(true)
    const today = new Date(Date.now())
    const date = new Date(state.todos[1].dateCompleted)
    expect(date.getDate()).to.equal(today.getDate())
    expect(date.getMonth()).to.equal(today.getMonth())
    expect(date.getFullYear()).to.equal(today.getFullYear())
  })
  it('DELETE_TASK', () => {
    const id = state.todos[0].id
    DELETE_TASK(state, state.todos[0])
    expect(state.todos).to.have.lengthOf(3)
    const ids = state.todos.map(todo => todo.id)
    expect(ids).to.not.include(id)
  })
  it('UNDO_COMPLETE', () => {
    UNDO_COMPLETE(state, state.todos[3])
    expect(state.todos[3].completed).to.equal(false)
    expect(state.todos[3].dateCompleted).to.equal('')
  })
  it('ADD_TASK', () => {
    const newTask = 'new task'
    ADD_TASK(state, newTask)
    expect(state.todos.length).to.equal(5)
    expect(state.id).to.equal(5)
    expect(state.todos[4].id).to.equal(5)
    expect(state.todos[4].task).to.equal(newTask)
    expect(state.todos[4].completed).to.equal(false)
    expect(state.todos[4].dateCompleted).to.equal('')
  })
})
