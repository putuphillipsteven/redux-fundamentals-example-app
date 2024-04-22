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

const alwaysReturnHelloMiddleware = (storeAPI) => (next) => (action) => {
  const originalResult = next(action)
  // Ignore the original result, return something else
  return 'Hello!'
}

const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware)

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = createStore(rootReducer, middlewareEnhancer)
const dispatchResult = store.dispatch({ type: 'some/action' })
console.log(dispatchResult)

export default store
