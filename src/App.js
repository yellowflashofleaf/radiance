import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Preloader from "./Pages/Preloader/Preloader";
import Routes from "./routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AuthContextProvider from "./context/Auth/AuthContext";
import SnackbarContextProvider from "./context/Snackbar/SnackbarContext";
import MySnackbar from "./EMS/components/snackbar";
import Notification from "./components/notification";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (window.location.pathname === "/app-sponsors") {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
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
                  <Notification />
                  <Routes />
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
