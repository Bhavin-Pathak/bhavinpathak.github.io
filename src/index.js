import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app.js";
import reportWebVitals from "./utils/reportWebVitals";
import "./style/globals.css"; // Ensure you have a global CSS file for styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
reportWebVitals();
