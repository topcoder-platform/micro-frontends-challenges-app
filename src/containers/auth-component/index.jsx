import React, { Component } from "react";
import PT from "prop-types";
import {
  getAuthUserTokens,
  disableSidebarForRoute,
} from "@topcoder/mfe-header";
import { connect } from "react-redux";
import ChallengeDetail from "../challenge-detail";
import LoadingPagePlaceholder from "components/LoadingPagePlaceholder";
import actions from "../../actions";

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const { getAuthToken } = this.props;
    disableSidebarForRoute("/challenges/*");
    getAuthToken().then(() => {
      this.setState({
        isLoaded: true,
      });
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return <LoadingPagePlaceholder />;
    }
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
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
