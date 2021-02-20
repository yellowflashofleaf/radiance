import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Glimpses from "./Pages/previous-glimpses/Glimpses";
import Auth from "./Pages/Login_SignUp/auth/auth";
import About from "./Pages/About_Page";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import Sponsor from "./Pages/Sponsors/Sponsor";
import Particles from "react-particles-js";
import Footer from "./Footer";
import Preloader from "./Pages/Preloader/Preloader";
import Suspense from "react";
import Routes from "./routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AuthContextProvider from "./context/Auth/AuthContext";
import SnackbarContextProvider from "./context/Snackbar/SnackbarContext";
import MySnackbar from "./EMS/components/Snackbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading");
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <SnackbarContextProvider>
          <AuthContextProvider>
            <Router>
              {loading ? (
                <Preloader />
              ) : (
                <>
                  <Navbar />
                  <Routes />
                  <Footer />
                </>
              )}
            </Router>
            <MySnackbar />
          </AuthContextProvider>
        </SnackbarContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
