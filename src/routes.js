import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Glimpses from "./Pages/previous-glimpses/Glimpses";
import Auth from "./Pages/Login_SignUp/auth/auth";
import About from "./Pages/About_Page";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import Sponsor from "./Pages/Sponsors/Sponsor";
import Home from "./Pages/Home";
import Dashboard from "./EMS/views/Dashboard";

class Routes extends React.Component {
  render() {
    return (
      // <Switch>
      //   <Route exact path="/" component={Dashboard} />
      // </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/previous-glimpses">
          <Glimpses />
        </Route>
        <Route exact path="/login">
          <div style={{ zIndex: 10 }}>
            <Auth />
          </div>
        </Route>
        <Route exact path="/register">
          <div style={{ zIndex: 10 }}>
            <Auth />
          </div>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/team">
          <div style={{ zIndex: 10 }}>
            <Team />
          </div>
        </Route>
        <Route path="/events">
          <div>
            <Events />
          </div>
        </Route>
        <Route path="/sponsors">
          <div style={{ zIndex: 10 }}>
            <Sponsor />
          </div>
        </Route>
        <Route path="/dashboard">
          <div style={{ zIndex: 10 }}>
            <Dashboard />
          </div>
        </Route>
      </Switch>
    );
  }
}

export default Routes;