import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

let middleWare = applyMiddleware(
  thunk,
  reduxLogger,
);

if (process.env.NODE_ENV !== 'production') {
  middleWare = composeWithDevTools(middleWare);
}

const store = createStore(rootReducer, middleWare);

export default store;
