import React from "react";
import { Route, Switch } from "react-router-dom";
import Glimpses from "./Pages/previous-glimpses/Glimpses";
import Auth from "./Pages/Login_SignUp/auth/auth";
import About from "./Pages/About_Page";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import Sponsor from "./Pages/Sponsors/Sponsor";
import Home from "./Pages/Home";
import { ProtectedRoute } from "./privateRoute";
import Dashboard from "./EMS/views/Dashboard";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy.component";
import NotFound from "./Pages/NotFound/NotFound.component";
import ForgotPasswordPage from "./Pages/ForgotPassword/ForgotPassword.page";
import Insight from "./Pages/Insight/insight";
import AppSponsor from "./Pages/Sponsors-app/Sponsor";

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
          <div style={{ zIndex: 0, overflow: "hidden" }}>
            <GoogleReCaptchaProvider reCaptchaKey="6LcvZwscAAAAAJDp3gjfVRWgrz4KlbwRECemft9s">
              <Auth />
            </GoogleReCaptchaProvider>
          </div>
        </Route>
        <Route exact path="/forgot-password">
          <div style={{ zIndex: 10, overflow: "hidden" }}>
            <GoogleReCaptchaProvider reCaptchaKey="6LcvZwscAAAAAJDp3gjfVRWgrz4KlbwRECemft9s">
              <ForgotPasswordPage />
            </GoogleReCaptchaProvider>
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
        <Route path="/myevents">
          <div>
            <Events flag={"MY"} />
          </div>
        </Route>
        <Route path="/sponsors">
          <div style={{ zIndex: 10, overflow: "hidden" }}>
            <Sponsor />
          </div>
        </Route>
        <Route path="/app-sponsors">
          <div style={{ height: "100%" }}>
            <AppSponsor />
          </div>
        </Route>
        <Route path="/privacy-policy">
          <div style={{ zIndex: 10, overflow: "hidden" }}>
            <PrivacyPolicy />
          </div>
        </Route>
        <Route path="/insight">
          <div style={{ zIndex: 10, overflow: "hidden" }}>
            <Insight />
          </div>
        </Route>
        <ProtectedRoute path="/dashboard" component={Dashboard}>
          {/* <div style={{ zIndex: 10, overflow: "hidden" }}>
            <Dashboard />
          </div> */}
        </ProtectedRoute>
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
