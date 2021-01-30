import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Glimpses from "./Pages/previous-glimpses/Glimpses";
import Auth from "./Pages/Login_SignUp/auth/auth";
import About from "./Pages/About_Page";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import Sponsor from "./Pages/Sponsors/Sponsor"
import Particles from 'react-particles-js'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
              <Events/>
              
            </div>
          </Route>
          <Route path="/sponsors">
            <div style={{ zIndex: 10 }}>
              <Sponsor/>
              
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
