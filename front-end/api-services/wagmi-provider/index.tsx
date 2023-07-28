import React, { createContext } from "react";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, polygon } from "wagmi/chains";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const chains = [mainnet, polygon];

const { publicClient } = configureChains(chains, [publicProvider()]);

const walletConnectConnector = new WalletConnectConnector({
  chains: chains,
  options: {
    projectId: "d2e2d969472a9f1989ea35333b09fcda",
    isNewChainsStale: true,
    metadata: {
      name: "wagmi",
      description: "my wagmi app",
      url: "https://wagmi.sh",
      icons: ["https://wagmi.sh/icon.png"],
    },
    showQrModal: true,
  },
});

const injectedConnectConnector = new InjectedConnector({
  chains: chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [injectedConnectConnector, walletConnectConnector],
  publicClient,
});

export const WagmiContext = createContext(wagmiConfig);

export const WagmiProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};
