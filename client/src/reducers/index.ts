import { combineReducers, Reducer } from "redux";
import UserJWTReducer from "./userJWTReducer";

import userDataReducer, {
  IState as userDataInterface
} from "./userDataReducer";

export interface IStoreState {
  userJWT: string | null;
  userData: userDataInterface;
}

const combinedReducers: Reducer<IStoreState> = combineReducers<IStoreState>({
  userJWT: UserJWTReducer,
  userData: userDataReducer
});

export default combinedReducers;
