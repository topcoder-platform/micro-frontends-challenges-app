/**
 * Main App component
 */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, Router, Redirect } from "@reach/router";
import { usePreviousLocation } from "./utils/hooks";
import ChallengeList from "./routers/challenge-list";
import ChallengeDetail from "./routers/challenge-detail";
import Submission from "./routers/submissions";
import "./styles/main.scss";

const App = () => {
  const location = useLocation();
  const previousLocation = usePreviousLocation();

  const varsRef = useRef();
  varsRef.current = { previousLocation };

  useEffect(() => {
    if (
      location.pathname !== varsRef.current.previousLocation.pathname ||
      location.search !== varsRef.current.previousLocation.search
    ) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Router>
      <ChallengeList path="/earn/find/challenges/" />
      <ChallengeDetail path={`/earn/find/challenges/:challengeId`} />
      <Submission path={`/earn/find/challenges/:challengeId/:page`} />
      <Redirect from="/earn/*" to="/earn/find/challenges/" noThrow />
    </Router>
  );
};

export default App;
