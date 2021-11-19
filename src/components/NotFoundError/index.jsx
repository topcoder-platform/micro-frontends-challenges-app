import React from "react";
import IconNotFound from "assets/icons/not-found.png";

import "./styles.scss";

const NotFoundError = ({ message }) => (
  <div styleName="not-found-error">
    <div>
      <img src={IconNotFound} alt="not found" />
    </div>
    <h1>404 Not found</h1>
    <p>Sorry, we couldn’t find that page</p>
  </div>
);

export default NotFoundError;
