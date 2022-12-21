import React from "react";
import { SWRConfig } from "swr";
import { BrowserRouter as MyRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Theme } from "./theme";
import { request } from "./utils/request";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyRouter>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            request(resource, init).then((res) => res.data),
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <Theme>
          <App />
        </Theme>
      </SWRConfig>
    </MyRouter>
  </React.StrictMode>
);
