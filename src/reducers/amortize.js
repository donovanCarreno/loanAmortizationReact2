import { INPUT_CHANGE, CREATE_AMORTIZATION_SCHEDULE } from '../actions/actionTypes'

const defaultState = {
  loanAmount: '',
  loanLength: '',
  interestRate: '',
  term: 'months',
  amortizationSchedule: [],
  sampleLoanAmount: '20000',
  sampleLoanLength: '60',
  sampleInterestRate: '7.5'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, ...action.payload }

    case CREATE_AMORTIZATION_SCHEDULE:
      return { ...state, amortizationSchedule: action.payload }

    default:
      return state
  }
}
