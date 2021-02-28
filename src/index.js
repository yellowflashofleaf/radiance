import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const asciiArt = `
██████  ██    ██ ██      ███████ ██  ██████  ███    ██     ██████   ██ 
██   ██ ██    ██ ██         ███  ██ ██    ██ ████   ██          ██ ███ 
██████  ██    ██ ██        ███   ██ ██    ██ ██ ██  ██      █████   ██ 
██      ██    ██ ██       ███    ██ ██    ██ ██  ██ ██     ██       ██ 
██       ██████  ███████ ███████ ██  ██████  ██   ████     ███████  ██ 
                                                                       
`

console.log(asciiArt)
console.log("\nYou seem to be interested in WebDev🚀...\nWhy not register for \"Web & App Development\" and have some fun!🤩\n")
console.log = function (){}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
