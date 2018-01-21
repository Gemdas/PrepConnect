/* import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Authentication/LoginPage";
import Dashboard from "./Pages/Dashboard";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>;

export default App; */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navigation from './Components/Shared/Navigation';
import HomePage from './Components/Home/HomePage';
import RegistrationForm from './Components/Authentication/RegistrationForm';
import config from './app.config';
import LoginPage from './Components/Authentication/LoginPage';
import ProfilePage from './Components/Authentication/ProfilePage';
import Dashboard from "./Pages/Dashboard";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Route exact path="/" render={() => <LoginPage baseUrl={config.url} />} />
          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={Dashboard} />
        </main>
      </div>
    );
  }
}
