import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'  
import { HashRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <SearchProvider>
      <App />
    </SearchProvider>
  </HashRouter>
);

