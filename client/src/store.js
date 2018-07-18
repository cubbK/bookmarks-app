import { createStore, applyMiddleware } from 'redux'

// Middleware
import reduxCatch from 'redux-catch'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'reducers'

function errorHandler(error, getState, lastAction, dispatch) {
  console.error(error);
  console.debug('current state', getState());
  console.debug('last action was', lastAction);
  // optionally dispatch an action due to the error using the dispatch parameter
}

const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(
    reduxCatch(errorHandler),
    promiseMiddleware(),
    thunk
  )
))

export default store