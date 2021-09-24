/**
 * This module contains a reducer for tc-communities related state
 */

/* global alert */

import _ from "lodash";
import actions from "actions/tc-communities";
import logger from "utils/logger";
import { handleActions } from "redux-actions";
import { fireErrorMessage } from "utils/errors";
import { STATE as JOIN_COMMUNITY } from "components/tc-communities/JoinCommunity";

/**
 * Handler for GET_LIST_INIT action.
 * @param {Object} state Old state.
 * @param {Object} action Action result.
 * @return {Object} New state.
 */
function onGetListInit(state, { payload }) {
  const list = { ...state.list, loadingUuid: payload };
  return { ...state, list };
}

/**
 * Handler for GET_LIST_DONE action.
 * @param {Object} state Old state.
 * @param {Object} action Action result.
 * @return {Object} New state.
 */
function onGetListDone(state, { error, payload }) {
  if (error) {
    fireErrorMessage("Failed to fetch sub-communities listing", "");
    logger.error(payload);
    return state;
  }
  const { list, uuid } = payload;
  if (uuid !== state.list.loadingUuid) return state;
  return {
    ...state,
    list: {
      data: list,
      loadingUuid: "",
      timestamp: Date.now(),
    },
  };
}

function create(initialState = {}) {
  const a = actions.tcCommunity;
  return handleActions(
    {
      [a.hideJoinButton]: (state) => ({
        ...state,
        joinCommunityButton: JOIN_COMMUNITY.HIDDEN,
      }),
      [a.resetJoinButton]: (state) => ({
        ...state,
        joinCommunityButton: JOIN_COMMUNITY.DEFAULT,
      }),
      [a.showJoinConfirmModal]: (state) => ({
        ...state,
        joinCommunityButton: JOIN_COMMUNITY.CONFIRM_JOIN,
      }),
      [a.getListInit]: onGetListInit,
      [a.getListDone]: onGetListDone,
    },
    _.defaults(_.clone(initialState), {
      joinCommunityButton: JOIN_COMMUNITY.DEFAULT,
      list: {
        data: [],
        loadingUuid: "",
        timestamp: 0,
      },
    })
  );
}

export default create();
