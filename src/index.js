import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const store = createStore(
  reducers, // all the reducers
  {}, // initial state
  composeWithDevTools(
    applyMiddleware(reduxThunk)
  )
)

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , app)

