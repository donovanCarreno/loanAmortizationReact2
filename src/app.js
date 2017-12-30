// React
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store/store'

//Styles
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// Components
import App from './components/App'

const JSX = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(JSX, document.getElementById('app'))
