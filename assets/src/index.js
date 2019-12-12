import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import App from "./app";
import All from "./components/All";
import Todos from "./components/Todos.js";
import NotFound from "./components/NotFound";
// import Edit from "./components/Edit";
// import Create from "./components/Create";
// import Show from "./components/Show";

import configureStore from "./store";
import Root from "./routes";

ReactDOM.render(
  <Provider store={configureStore}>
    {/* <Root /> */}
    <Router>
      <Switch>
        <Route path="/" component={App} />
        {/* <Route path="/create" component={Create} /> */}
        {/* <Route path="/show" component={Show} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
    {/* <Router>
      <App />
    </Router> */}
  </Provider>,
  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={App} />
  //     <Route path="/all" component={All} />
  //     <Route component={NotFound} />
  //   </Switch>
  // </Router>,
  document.getElementById("app")
);
