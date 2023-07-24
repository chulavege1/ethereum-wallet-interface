import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { WalletProvider } from "~CONTEXT/web3-wallet/walletProvider";
import { Pool_data_provider } from "~CONTEXT/pool-data/pool-data-provider";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("app");

if (!root) {
  throw new Error("No root element found");
}

createRoot(root).render(
  <React.StrictMode>
    <WalletProvider>
      <Pool_data_provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Pool_data_provider>
    </WalletProvider>
  </React.StrictMode>,
);
