import { combineReducers, Reducer } from "redux";
import UserJWTReducer from "./userJWTReducer";

import userDataReducer, {
  IState as userDataInterface
} from "./userDataReducer";

import addLinkReducer, { IState as addLinkInterface } from "./addLinkReducer";
import filterStringReducer, { IState as filterStringInterface } from './filterStringReducer'

export interface IStoreState {
  userJWT: string | null;
  userData: userDataInterface;
  addLinkState: addLinkInterface;
  filterString:  filterStringInterface;
}

const combinedReducers: Reducer<IStoreState> = combineReducers<IStoreState>({
  userJWT: UserJWTReducer,
  userData: userDataReducer,
  addLinkState: addLinkReducer,
  filterString: filterStringReducer
});

export default combinedReducers;
