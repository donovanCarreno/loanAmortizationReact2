import { INPUT_CHANGE, CREATE_AMORTIZATION_SCHEDULE } from './actionTypes'
import { calcPayment, createAmortizationSchedule } from '../helpers/helpers'

export const inputChange = (e) => ({
  type: INPUT_CHANGE,
  payload: { [e.target.name]: e.target.value }
})

export const calcAmortizationSchedule = (loanAmount, loanLength, interestRate) => {
  const monthlyPayment = calcPayment(loanAmount, loanLength, interestRate)
  const amortizationSchedule = createAmortizationSchedule(loanAmount, loanLength, interestRate, monthlyPayment)

  return { type: CREATE_AMORTIZATION_SCHEDULE, payload: amortizationSchedule }
}
