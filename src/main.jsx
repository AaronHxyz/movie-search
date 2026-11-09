/* ======================================================
    Lab 8 - main.jsx starter
====================================================== */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// TODO 2: 
// Mount the React app using createRoot syntax. 

// Example: 
// ReactDOM.createRoot(document.getElementById("root")).render( 
//   <React.StrictMode> 
//     <App /> 
//   </React.StrictMode> 
// );

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);