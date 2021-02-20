import "./App.css";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Pages/Preloader/Preloader";
import Routes from "./routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AuthContextProvider from "./context/Auth/AuthContext";
import SnackbarContextProvider from "./context/Snackbar/SnackbarContext";
import MySnackbar from "./EMS/components/Snackbar";
import Notification from "./components/notification";

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
            <SnackbarContextProvider>
                <AuthContextProvider>
                    <Router>
                        {loading ? (
                            <Preloader/>
                        ) : (
                            <>
                                <Navbar/>
                                <Notification/>
                                <Routes/>
                                <Footer/>
                            </>
                        )}
                    </Router>
                    <MySnackbar/>
                </AuthContextProvider>
            </SnackbarContextProvider>
        </div>
    );
}

export default App;
