import React, { Fragment } from 'react'
import { applyMiddleware, createStore } from 'redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './api/server'
import store from './store'

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById('root')
)
