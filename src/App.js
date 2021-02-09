import "./App.css";
import React, {useState, useEffect} from "react";
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
import Preloader from "./Pages/Preloader/Preloader"
import Suspense from "react"

function App() {
  const [loading,setLoading] = useState(true); 

  useEffect(() => {
    console.log("Loading")
  },[loading])

  useEffect(() => {
    setTimeout(() => {setLoading(false)}, 3000)
  },[])

  return (
    <div className="App">
      <Router>
        {loading ? <Preloader/> : (<>
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
          </>
        )}
      </Router>
     
    </div>
  );
}

export default App;
