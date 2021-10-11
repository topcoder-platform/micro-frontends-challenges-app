/* global process */
import React, { useEffect } from "react";
import { createHistory, LocationProvider } from "@reach/router";
import { Provider } from "react-redux";
import { setErrorsStore } from "utils/errors";
import store from "./store";
import App from "./App";

export default function Root() {
  useEffect(() => {
    setErrorsStore(store);
  }, []);

  return (
    <LocationProvider history={createHistory(window)}>
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
