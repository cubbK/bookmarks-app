import { combineReducers, Reducer } from "redux";
import googleTokenReducer from "./googleTokenReducer";
import userIdReducer from "./userIdReducer";
import userDataReducer, {
  IState as userDataInterface
} from "./userDataReducer";

interface IStoreState {
  googleToken: string | null;
  userId: string | null;
  userData: userDataInterface;
}

const combinedReducers: Reducer<IStoreState> = combineReducers<IStoreState>({
  googleToken: googleTokenReducer,
  userId: userIdReducer,
  userData: userDataReducer
});

export default combinedReducers;
