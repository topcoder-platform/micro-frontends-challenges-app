/* global process */
import React, { useEffect } from "react";
import { createHistory, LocationProvider } from "@reach/router";
import { Provider } from "react-redux";
import { setErrorsStore } from "utils/errors";
import store from "./store";
import App from "./App";

// History for location provider
const history = createHistory(window);

export default function Root() {
  useEffect(() => {
    setErrorsStore(store);
  }, []);

  return (
    <LocationProvider history={history}>
      <Provider store={store}>
        <>
          <App />
          {process.env.NODE_ENV === "test" && (
            <span hidden>Challenges App</span>
          )}
        </>
      </Provider>
    </LocationProvider>
  );
}
