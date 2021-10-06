/**
 * Main App component
 */
import React from "react";
import { Router } from "@reach/router";
import _ from "lodash";
import Submission from "../../containers/Submission";
import SubmissionManagement from "../../containers/SubmissionManagement";
import ErrorMessage from "components/ErrorMessage";
import { useSelector } from "react-redux";
import { clearErrorMesssage } from "../../utils/logger";
import { CHALLENGES_URL } from "../../constants";

import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import "rc-tooltip/assets/bootstrap.css";

const App = () => {
  const alert = useSelector((state) => state.errors.alerts[0]);
  return (
    <>
      <Router basepath={CHALLENGES_URL}>
        <Submission exact path="/:challengeId/submit" />
        <SubmissionManagement exact path="/:challengeId/my-submissions" />
      </Router>
      <div id="tooltips-container-id" />
      {alert && (
        <ErrorMessage
          title={alert.title}
          details={alert.details}
          onOk={() => clearErrorMesssage()}
        />
      )}
    </>
  );
};

export default App;
