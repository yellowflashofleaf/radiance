import "./App.css";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import Preloader from "./Pages/Preloader/Preloader";
import Routes from "./routes";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import AuthContextProvider from "./context/Auth/AuthContext";
import SnackbarContextProvider from "./context/Snackbar/SnackbarContext";
import MySnackbar from "./EMS/components/Snackbar";
import Notification from "./components/notification";
import queryString from "query-string";

function App() {
    const [loading, setLoading] = useState(true);
    const [parsed, setParsed] = useState(false);
    useEffect(() => {

        let parsed1 = queryString.parse(window.location.search);
        if (parsed1.app === '1'){
            setParsed(true)
        }else{
            setParsed(false)
        }


        setTimeout(() => {
            setLoading(false);
        }, 1000);
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
                                <Preloader/>
                            ) : (
                                <>
                                    {parsed ? <></> : <Navbar/>}
                                    <Notification/>
                                    <Routes/>
                                </>
                            )}
                        </Router>
                        <MySnackbar/>
                    </AuthContextProvider>
                </SnackbarContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
