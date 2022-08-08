import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { App } from "./components/App.js"
import HttpsRedirect from 'react-https-redirect'
import "./index.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <HttpsRedirect>
                <App />
            </HttpsRedirect>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
