import React from "react";
import PT from "prop-types";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";
import config from '../../../../../config'

import "./styles.scss";

const Header = ({ title, challengeId }) => {

  return (
    <div styleName="header">
      <a onClick={()=> navigate(-1)}>
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
