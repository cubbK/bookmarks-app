import { combineReducers, Reducer } from "redux";
import UserJWTReducer from "./userJWTReducer";

import userDataReducer, {
  IState as userDataInterface
} from "./userDataReducer";

import addLinkReducer, { IState as addLinkInterface } from "./addLinkReducer";

export interface IStoreState {
  userJWT: string | null;
  userData: userDataInterface;
  addLink: addLinkInterface;
}

const combinedReducers: Reducer<IStoreState> = combineReducers<IStoreState>({
  userJWT: UserJWTReducer,
  userData: userDataReducer,
  addLink: addLinkReducer
});

export default combinedReducers;
