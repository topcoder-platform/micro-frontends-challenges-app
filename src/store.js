/* global process */
/**
 * Configure Redux Store
 */
import { createStore, compose, applyMiddleware } from "redux";
import { createPromise } from "redux-promise-middleware";
import promiseMiddleware from "redux-promise";
import root from "./reducers";

const middlewares = [
  promiseMiddleware,
  // createPromise({ promiseTypeSuffixes: ["INIT", "DONE", "FAILURE"] }),
];

if (process.env.APPMODE === "development") {
  const logger = require("redux-logger").createLogger();
  middlewares.push(logger);
}

export default createStore(root, compose(applyMiddleware(...middlewares)));
