import React, { Component } from "react";
import PT from "prop-types";
import {
  getAuthUserTokens,
  disableSidebarForRoute,
} from "@topcoder/micro-frontends-navbar-app";
import { connect } from "react-redux";
import ChallengeDetail from "../challenge-detail";
import actions from "../../actions";

class AuthComponent extends Component {
  componentDidMount() {
    const { getAuthToken } = this.props;
    disableSidebarForRoute("/challenges/*");
    getAuthToken();
  }

  render() {
    return <ChallengeDetail {...this.props} />;
  }
}

AuthComponent.propTypes = {
  auth: PT.arrayOf(PT.object),
};

function mapStateToProps(state, props) {
  const { auth } = state;
  return {
    auth,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthToken: () => {
      return getAuthUserTokens().then((tokens) => {
        if (tokens.tokenV2) {
          dispatch(actions.auth.setTcTokenV2(tokens.tokenV2));
        }
        if (tokens.tokenV3) {
          dispatch(actions.auth.setTcTokenV3(tokens.tokenV3));
          return dispatch(actions.auth.loadProfile(tokens.tokenV3));
        } else {
          dispatch(actions.auth.setAuthenticatingDone());
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
