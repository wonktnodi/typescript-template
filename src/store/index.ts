import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer, initialState } from "../reducers";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    (window as any) &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (s: any) => {
  const middlewares = [logger, thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(reducer, s, enhancer);
};
// const store = configureStore();

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
// const store = createStore(reducer, initialState, applyMiddleware(logger));
const store = configureStore(initialState);

export default store;
