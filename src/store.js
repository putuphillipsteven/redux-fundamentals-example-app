import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware'
import { composeWithDevTools } from '@redux-devtools/extension'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}
const middlewareEnhancer = applyMiddleware(print1, print2, print3)

const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, print2, print3)
)

const store = createStore(rootReducer, composedEnhancer)

export default store

