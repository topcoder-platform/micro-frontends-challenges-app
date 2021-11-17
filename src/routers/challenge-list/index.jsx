/**
 * challenge listing app
 */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, Router } from "@reach/router";
import Challenges from "../../containers/Challenges";
import Filter from "../../containers/Filter";
import { FeedbackButton, showMenu } from "@topcoder/micro-frontends-earn-app";
import actions from "../../actions";
import * as utils from "../../utils";
import store from "../../store";
import { initialChallengeFilter } from "../../reducers/filter";
import _ from "lodash";

import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import "rc-tooltip/assets/bootstrap.css";

const App = () => {
  const location = useLocation();
  const previousControllerRef = useRef();

  useLayoutEffect(() => {
    showMenu(true);
    return () => {
      showMenu(false);
    };
  }, []);

  useEffect(() => {
    if (!location.search) {
      const currentFilter = store.getState().filter.challenge;
      const diff = !_.isEqual(initialChallengeFilter, currentFilter);

      if (diff) {
        const params = utils.challenge.createChallengeParams(currentFilter);
        utils.url.updateQuery(params, true);
      } else {
        store.dispatch(actions.challenges.getChallengesInit());
        store.dispatch(
          actions.challenges.getChallengesDone(currentFilter)
        );
      }

      return;
    }

    let search = location.href.split('?').length ? '?' + location.href.split('?')[1]: ''
    const params = utils.url.parseUrlQuery(search);
    const toUpdate = utils.challenge.createChallengeFilter(params);

    if (!toUpdate.types) toUpdate.types = [];
    if (!toUpdate.tracks) toUpdate.tracks = [];
    if (!toUpdate.bucket) toUpdate.bucket = "";

    const updatedFilter = { ...initialChallengeFilter, ...toUpdate };
    const currentFilter = store.getState().filter.challenge;
    const diff = !_.isEqual(updatedFilter, currentFilter);
    if (diff) {
      store.dispatch(actions.filter.updateFilter(updatedFilter));
    }

    const controller = new AbortController();
    const signal = controller.signal;
    if (previousControllerRef.current) {
      // abort the pending request
      previousControllerRef.current.abort();
    }
    previousControllerRef.current = controller;

    store.dispatch(actions.challenges.getChallengesInit());
    store.dispatch(actions.challenges.getChallengesDone(updatedFilter, signal));
  }, [location]);

  return (
    <>
      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-content">
            <div id="menu-id" />
            <hr />
            <Filter />
          </div>
          <div className="sidebar-footer">
            <FeedbackButton />
          </div>
        </aside>
        <div className="content">
          <Challenges />
        </div>
      </div>
      <div id="tooltips-container-id" />
    </>
  );
};

export default App;
