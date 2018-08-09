import { combineReducers, Reducer } from 'redux'
import googleTokenReducer from './googleTokenReducer'

interface IStoreState {
  googleToken: string | null
}

const combinedReducers: Reducer<IStoreState> = combineReducers<IStoreState>({
  googleToken: googleTokenReducer
})

console.log(combinedReducers)

export default combinedReducers