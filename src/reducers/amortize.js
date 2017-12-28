import { INPUT_CHANGE } from '../actions/actionTypes'

const defaultState = {
  loanAmount: '',
  loanLength: '',
  interestRate: '',
  term: 'months'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
