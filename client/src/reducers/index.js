import { combineReducers } from 'redux'
import testReducer from './test'
import googleTokenReducer from './googleTokenReducer'

export default combineReducers({
  testReducer,
  googleToken: googleTokenReducer
})