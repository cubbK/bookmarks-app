import { createStore, applyMiddleware } from "redux";

// Middleware
import reduxCatch from "redux-catch";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from "reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userJWT"] // only googleToken will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function errorHandler(error, getState, lastAction, dispatch) {
  console.error(error);
  console.debug("current state", getState());
  console.debug("last action was", lastAction);
  // optionally dispatch an action due to the error using the dispatch parameter
}

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(reduxCatch(errorHandler), promiseMiddleware(), thunk)
  )
);

export const persistor = persistStore(store);
