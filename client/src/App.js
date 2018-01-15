import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import UpdateAccount from "./Pages/UpdateAccount";
import ConnectionsJobSeeker from "./Pages/ConnectionsJobSeeker";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/update" component={UpdateAccount} />
        <Route exact path="/js_connections" component={ConnectionsJobSeeker} />
      </Switch>
    </div>
  </Router>;

export default App;
