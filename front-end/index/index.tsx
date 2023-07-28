import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./app";
import { Pool_data_provider } from "~CONTEXT/pool-data";
import { WagmiProvider } from "~APISERVICES/wagmi-provider";

const root = document.getElementById("app");

if (!root) {
  throw new Error("No root element found");
}

createRoot(root).render(
  <React.StrictMode>
    <WagmiProvider>
      <Pool_data_provider>
        <HashRouter>
          <App />
        </HashRouter>
      </Pool_data_provider>
    </WagmiProvider>
  </React.StrictMode>,
);
