import React from "react";
import './App.css';
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Layout from "./pages/layout/Layout";

import "./assets/scss/themes.scss";
import "./assets/css/materialdesignicons.min.css";

function App() {
  return (
    <React.Fragment>
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  </React.Fragment>
  );
}

export default withRouter(App);
