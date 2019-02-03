import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/asyncComponent";

const AsyncHome = asyncComponent(() => import("./containers/home"));
const AsyncAbout = asyncComponent(() => import("./containers/about"));
const AsyncProject = asyncComponent(() => import("./containers/project"));
const AsyncContact = asyncComponent(() => import("./containers/contact"));
// import Home from "./containers/home";
// import Login from "./containers/login";
export default () =>
<Switch>
<Route path="/" exact component={AsyncHome} />
<Route path="/about" exact component={AsyncAbout} />
<Route path="/project" exact component={AsyncProject} />
<Route path="/contact" exact component={AsyncContact} />
</Switch>;
