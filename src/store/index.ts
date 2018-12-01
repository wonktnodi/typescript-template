import { createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { rootReudcer } from "../reducers";
import { rootEpic } from "../epics";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReudcer,
    composeEnhancers(applyMiddleware(epicMiddleware, logger))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
