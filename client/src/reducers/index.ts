import { combineReducers, Reducer } from "redux";
import googleTokenReducer from "./googleTokenReducer";
import userIdReducer from "./userIdReducer";

interface IStoreState {
  googleToken: string | null;
  userId: string | null;
}

const combinedReducers: Reducer<IStoreState> = combineReducers<IStoreState>({
  googleToken: googleTokenReducer,
  userId: userIdReducer
});

export default combinedReducers;
