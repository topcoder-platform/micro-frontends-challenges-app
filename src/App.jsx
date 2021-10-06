/**
 * Main App component
 */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, Router } from "@reach/router";
import ChallengeList from "./routers/challenge-list";
import ChallengeDetail from "./routers/challenge-detail";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <ChallengeList path="/earn/find/challenges" />
      <ChallengeDetail path={`/earn/find/challenges/:challengeId`} />
    </Router>
  );
};

export default App;
