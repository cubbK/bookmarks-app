import { combineReducers } from 'redux'
import googleTokenReducer from './googleTokenReducer'

export default combineReducers({
  googleToken: googleTokenReducer
})