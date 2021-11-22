import React from "react";
import ReactDOM from "react-dom";
import "./index.js";
import App from "./app.js"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();