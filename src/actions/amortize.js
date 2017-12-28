import { INPUT_CHANGE } from './actionTypes'

export const inputChange = (e) => ({
  type: INPUT_CHANGE,
  payload: { [e.target.name]: e.target.value }
})
