import { createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { rootReudcer } from "../reducers";
import { rootEpic } from "../epics";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// console.log("env: ", process.env.NODE_ENV);
// const composeEnhancers =
//   /*process.env.NODE_ENV === "development" &&*/
//   ((window as any) && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReudcer,
    composeEnhancers(applyMiddleware(epicMiddleware, logger))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
