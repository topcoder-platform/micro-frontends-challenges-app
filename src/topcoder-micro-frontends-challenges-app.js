import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import appInit from "./utils/lifeCycle";
import NotFoundError from "./components/NotFoundError";

const appLifecycles = appInit();

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return <NotFoundError />;
  },
});

const bootstrap = [appLifecycles.bootstrap, lifecycles.bootstrap];
const mount = [appLifecycles.mount, lifecycles.mount];
const unmount = [lifecycles.unmount];

export { bootstrap, mount, unmount };
