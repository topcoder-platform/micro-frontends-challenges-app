/**
 * challenge detail app
 */
import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import AuthComponent from "containers/auth-component";
import ErrorMessage from "containers/ErrorMessage";
import "utils/loading-indicator-animation";

if (process.env.APPENV === "production") {
  require("topcoder-react-ui-kit/dist/prod/style.css");
} else {
  require("topcoder-react-ui-kit/dist/dev/style.css");
}

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Route
          exact
          path={`/earn/find/challenges/:challengeId([\\w]{8}-[\\w]{4}-[\\w]{4}-[\\w]{4}-[\\w]{12}|\\d{5,8})`}
          component={AuthComponent}
        />
      </BrowserRouter>
      <ErrorMessage />
    </>
  );
};

export default App;
