import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./app";
import Todos from "./components/Todos";
import NotFound from "./components/NotFound";

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/all" component={Todos} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Root;
