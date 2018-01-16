import cloneDeep from 'clone-deep'
import { expect } from 'chai'
import { getters, state } from '../../../src/store/store'

const localState = state

describe('getters', () => {
  let state
  beforeEach(function () {
    state = cloneDeep(localState)
  })
  it('completedTasks', () => {
    const completedTasks = getters.completedTasks(state)
    expect(completedTasks).to.have.lengthOf(2)
    expect(completedTasks).to.deep.equal([
      {
        id: 1,
        task: 'Learn Vue',
        completed: true,
        dateCompleted: new Date('January 15, 2018')
      },
      {
        id: 4,
        task: 'Eat tacos',
        completed: true,
        dateCompleted: new Date('January 15, 2018')
      }
    ])
  })
  it('pendingTasks', () => {
    const pendingTasks = getters.pendingTasks(state)
    expect(pendingTasks).to.have.lengthOf(2)
    expect(pendingTasks).to.deep.equal([
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
      }
    ])
  })
})
