import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          137: "https://polygon-rpc.com",
          56: "https://bsc-dataseed1.binance.org",
        },
      },
    },
  },
});

export const initWeb3 = (
  setProvider: (provider: Web3Provider) => void,
  setActiveAddress: (address: string | null) => void,
) => {
  const loadWeb3Modal = async () => {
    const rawProvider = await web3Modal.connect();
    const newProvider = new Web3Provider(rawProvider);
    setProvider(newProvider);
    const signer = newProvider.getSigner();
    const address = await signer.getAddress();
    setActiveAddress(address);
  };

  if (web3Modal.cachedProvider) {
    loadWeb3Modal();
  }

  const provider = window.ethereum;

  if (!provider) return;

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      console.log("Please connect to Metamask.");
    } else if (accounts[0] !== provider.selectedAddress) {
      loadWeb3Modal();
    }
  };

  provider.on("accountsChanged", handleAccountsChanged);
};
