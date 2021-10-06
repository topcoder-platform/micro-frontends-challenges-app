/**
 * Main App component
 */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, Router } from "@reach/router";
import ChallengeList from "./routers/challenge-list";
import ChallengeDetail from "./routers/challenge-detail";
import Submission from "./routers/submissions";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <ChallengeList path="/earn/find/challenges" />
      <ChallengeDetail path={`/earn/find/challenges/:challengeId`} />
      <Submission path={`/earn/find/challenges/:challengeId/submit`} />
    </Router>
  );
};

export default App;
