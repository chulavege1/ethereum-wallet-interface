import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./app";
import { Pool_data_provider } from "~CONTEXT/pool-data";
import { Web3_modal_provider } from "~APISERVICES/web3-provider";

const root = document.getElementById("app");

if (!root) {
  throw new Error("No root element found");
}

createRoot(root).render(
  <React.StrictMode>
    <Web3_modal_provider>
      <Pool_data_provider>
        <HashRouter>
          <App />
        </HashRouter>
      </Pool_data_provider>
    </Web3_modal_provider>
  </React.StrictMode>,
);
