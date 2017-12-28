import { createStore } from 'redux'
import amortizeReducer from '../reducers/amortize'

const store = createStore(
  amortizeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
