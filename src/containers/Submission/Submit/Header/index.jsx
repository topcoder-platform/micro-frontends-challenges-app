import React from "react";
import PT from "prop-types";
import { Link } from "@reach/router";
import { COMMUNITY_CHALLENGES_URL } from "../../../../constants";

import "./styles.scss";

const Header = ({ title, challengeId }) => {
  return (
    <div styleName="header">
      <a href={`${COMMUNITY_CHALLENGES_URL}/${challengeId}`}>
        <span>&#x2039;</span>
        <p>Back to challenge</p>
      </a>
      <h1>{title}</h1>
    </div>
  );
};

Header.defaultProps = {};

Header.propTypes = {
  title: PT.string,
  challengeId: PT.string,
};

export default Header;
