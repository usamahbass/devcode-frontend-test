import React from "react";
import { BrowserRouter as MyRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Theme } from "./theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyRouter>
      <Theme>
        <App />
      </Theme>
    </MyRouter>
  </React.StrictMode>
);
